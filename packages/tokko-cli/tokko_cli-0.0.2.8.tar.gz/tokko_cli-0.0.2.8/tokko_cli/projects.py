from typing import Callable, Dict, Any, List, Union
from configparser import ConfigParser
import shutil
import json
import os

import jsonschema
import yaml

from tokko_cli.templates import PRE_PROJECT_TEMPLATE

from tokko_cli.conf import Settings
from tokko_cli.utils import render
from tokko_cli.templates import (
    PROJECT_DEPENDENCIES_COLLECT_TEMPLATE as DEPENDENCIES_COLLECT,
    PROJECT_NETWORKS_COLLECT_TEMPLATE as NETWORKS_COLLECT,
    PROJECT_DEVELOP_COLLECT_TEMPLATE as DEVELOP_COLLECT,
)


__all__ = [
    "VERIFIED_DEPENDENCIES",
    "VALID_DOCKER_COMPOSE_SCHEMA",
    "PLATFORM_NETWORKS",
    "RABBIT_MQ_SERVICE",
    "POSTGRE_DATABASE",
    "ls",
    "create",
    "export_service",
    "import_all_projects",
]

HERE = os.path.abspath(os.path.dirname(__file__))
VERIFIED_DEPENDENCIES = ["pg_database"]
VALID_DOCKER_COMPOSE_SCHEMA = {
    "type": "object",
    "properties": {
        "version": {"type": "string"},
        "services": {"type": "object"},
        "networks": {"type": "object"},
    },
    "required": ["services"],
}
VALID_SERVICE_SCHEMA = {
    "type": "object",
    "properties": {
        "ports": {"type": "array"},
        "build": {"type": "string"},
        "depends_on": {"type": "array"},
        "environment": {"type": "object"},
        "container_name": {"type": "string"},
    },
    "required": ["build", "container_name"],
}

PLATFORM_NETWORKS = {"tokko-broker_services_network": {"driver": "bridge"}}

RABBIT_MQ_SERVICE = {
    "image": "rabbitmq:3-management",
    "hostname": "rabbitmq",
    "volumes": ["~/tokkobrokers/data/rabbitmq:/var/lib/rabbitmq"],
    "environment": {
        "RABBITMQ_NODENAME": "tokko@rabbitmq",
        "RABBITMQ_ERLANG_COOKIE": "SWQOKODSQALRPCLNMEQG",
        "RABBITMQ_DEFAULT_USER": "tokko",
        "RABBITMQ_DEFAULT_PASS": "tokko",
        "RABBITMQ_DEFAULT_VHOST": "tokko",
    },
    "ports": ["5672:5672", "15672:15672"],
}

POSTGRE_DATABASE = {
    "image": "postgres:12.0",
    "container_name": "tokko_broker_pg_db",
    "restart": "always",
    "environment": {
        "DATABASES": [],
        "POSTGRES_DB": "tokkobroker_db",
        "POSTGRES_USER": "tokkobroker_user",
        "POSTGRES_PASSWORD": "tokkobroker_pwd",
    },
    "volumes": [
        "~/tokkobrokers/data/postgres:/var/lib/postgresql/data",
        "./deployment/db/postgres/scripts:/docker-entrypoint-initdb.d",
    ],
    "ports": ["5432:5432"],
}


def get_folders(path) -> list:
    if not path:
        raise IOError(f"Invalid path: {path}")
    if not os.path.exists(path):
        raise IOError("Location does not exists")
    if not os.path.isdir(path):
        path = os.path.dirname(path)
    _content = [
        os.path.join(path, item)
        for item in os.listdir(path)
        if not item.startswith(".")
    ]
    return [item for item in _content if os.path.isdir(item)]


def get_sub_folders_when(condition: Callable, root_folder):
    folders = get_folders(root_folder)
    return [folder for folder in folders if condition(folder)]


def get_docker_compose(filename, raise_exception=False):
    if os.path.exists(filename):
        with open(filename, "r") as stream:
            yml_as_dict = yaml.safe_load(stream)
            if not isinstance(yml_as_dict, dict):
                raise TypeError("Invalid MimeType")
            try:
                jsonschema.validate(
                    instance=yml_as_dict, schema=VALID_DOCKER_COMPOSE_SCHEMA
                )
                return yml_as_dict
            except Exception as e:
                raise ValueError(f"Unsupported DockerCompose SCHEMA version. {e}")
    if raise_exception:
        raise IOError(f"File '{filename}' does not exist")


def get_all_docker_compose_files(root_folders):
    folders_with_docker_compose = get_sub_folders_when(
        lambda folder: (os.path.exists(os.path.join(folder, "docker-compose.yml"))),
        root_folders,
    )
    return [
        {
            "folder": f"{folder}",
            "project": f"{os.path.basename(folder)}",
            "paths": {
                "abs": os.path.join(HERE, folder, "docker-compose.yml"),
                "rel": os.path.join(folder, "docker-compose.yml"),
            },
        }
        for folder in folders_with_docker_compose
    ]


def __load_service__(name, content) -> dict:
    return {
        "name": name,
        "containerName": content.get("container_name", "random-name"),
        "baseImage": content.get("image"),
        "ports": content.get("ports", []),
        "networks": content.get("networks", []),
        "volumes": content.get("volumes", []),
        "environment": [
            {"name": name, "value": value}
            for name, value in content.get("environment", {}).items()
        ],
    }


def load_services(docker_compose: dict) -> list:
    try:
        services = docker_compose["services"]
        if not services or not isinstance(services, dict):
            raise KeyError
        return [__load_service__(name, content) for name, content in services.items()]
    except KeyError:
        raise KeyError("Services key is required")


def inflate_services_stack(docker_compose_file: str):
    docker_compose = get_docker_compose(docker_compose_file, raise_exception=True)
    return load_services(docker_compose)


def get_projects(root_folder):
    projects = [
        {**project, "services": inflate_services_stack(project["paths"]["abs"]),}
        for project in get_all_docker_compose_files(root_folder)
    ]
    return projects


def which(project, use_details=True) -> dict:
    return {
        "services": project["services"] if use_details else [],
        "project": project["project"],
        "root_folder": project["paths"]["abs"],
    }


def ls(root_folder: str = ".", use_details: bool = True) -> str:
    if not root_folder or root_folder == ".":
        home = os.path.abspath(os.path.dirname(__file__))
        root_folder = os.path.dirname(os.path.dirname(os.path.dirname(home)))
    projects = get_projects(root_folder)
    result = []
    for project in projects:
        result.append(
            render(PRE_PROJECT_TEMPLATE, **which(project, use_details=use_details))
        )
    return "\n".join(result)


NullableFlag = Union[bool, None]


def projects_are_initialized(user: str) -> NullableFlag:
    ...


def init_source_folder() -> NullableFlag:
    ...


def __download_repo__(repo, destination, **options) -> Union[None, dict]:
    ...


def is_project_service(service: dict) -> bool:
    if not isinstance(service, dict):
        raise TypeError(
            f"Incompatible service. " f"Expected dict, got {type(service).__name__} "
        )
    try:
        jsonschema.validate(service, VALID_SERVICE_SCHEMA)
        return "build" in service.keys()
    except jsonschema.exceptions.ValidationError:
        return False


def get_app_containers(docker_compose_services: dict) -> List[str]:
    if not isinstance(docker_compose_services, dict):
        raise TypeError(
            f"DockerCompose Error. "
            f"Expected DICT instance, "
            f"got {type(docker_compose_services).__name__}"
        )
    return [
        service["container_name"]
        for service in docker_compose_services.values()
        if is_project_service(service)
    ]


def get_sources(services: dict):
    dependencies = {}
    develop = {}
    for name, service in services.items():
        if is_project_service(service):
            develop[name] = service
        else:
            dependencies[name] = service
    return {"develop": develop, "dependencies": dependencies}


def get_docker_compose_project(project_folder):
    """Retrieve docker-compose as Dict if exists in project_folder"""
    if not os.path.exists(project_folder):
        raise OSError(f"Folder {project_folder} not found!.")
    docker_compose = os.path.join(project_folder, "docker-compose.yml")
    services = get_docker_compose(docker_compose,)["services"]
    return {
        **get_sources(services),
        "services": list(services.keys()),
        "docker-compose": docker_compose,
        "app-containers": get_app_containers(services),
        "networks": get_networks(project_folder),
    }


def contains_docker_compose(path) -> bool:
    """Project folder selection rules"""
    return all(
        [
            isinstance(path, str),
            not path == "",
            os.path.exists(path),
            os.path.exists(os.path.join(path, "docker-compose.yml")),
        ]
    )


def get_all_project_folders(src_home: str):
    """Get all folders in src_home when contains_docker_compose is true"""
    if not os.path.exists(src_home):
        raise OSError(f"Location {src_home} not found")
    if not os.path.isdir(src_home):
        raise OSError("SRC_HOME should be a Folder")
    content = os.listdir(src_home)
    return [
        os.path.join(src_home, location)
        for location in content
        if contains_docker_compose(os.path.join(src_home, location))
    ]


def get_all_projects(src_home, blacklist: list = None) -> dict:
    blacklist = blacklist or []
    folder_with_projects = get_all_project_folders(src_home)
    return {
        os.path.basename(project): get_docker_compose_project(project)
        for project in folder_with_projects
        if project not in blacklist
    }


def get_networks(project_folder) -> Dict[str, Any]:
    return get_docker_compose(os.path.join(project_folder, "docker-compose.yml")).get(
        "networks"
    )


def collect(projects_folder):
    project = get_docker_compose_project(projects_folder)
    develop = project["develop"]
    dependencies = project["dependencies"]
    networks = project["networks"]
    return develop, dependencies, networks


def collect_develop_services(sources: str, omitted: List[str]):
    all_projects = get_all_projects(sources, omitted)
    dev_projects = [v["develop"] for k, v in all_projects.items()]
    dev_services = {
        f"{list(service.keys())[0]}": list(service.values())[0]
        for service in dev_projects
    }
    return {"version": "3", "services": dev_services, "networks": get_networks(sources)}


def _export_meta(template: str, filename: str, **data):
    if not os.path.exists(os.path.dirname(filename)):
        os.makedirs(os.path.dirname(filename))
    with open(filename, "w") as _meta_file:
        _meta_file.write(render(template, **data))
    return filename


def _export_networks(networks: dict, project_folder) -> str:
    return _export_meta(
        NETWORKS_COLLECT, os.path.join(project_folder, ".meta/networks.tbs"), **networks
    )


def _export_develop(develop: dict, project_folder: str):
    data = {}
    for service in develop:
        require_db_support = "pg_database" in develop[service].get("depends_on", [])
        require_rabbit_mq = "rabbitmq" in develop[service].get("depends_on", [])
        required_db = develop[service].get("environment", {}).get("DATABASE_NAME", "")
        internal_ports = []
        for port in develop[service].get("ports", []):
            try:
                internal_ports.append(f'{port.split(":")[1]}')
            except KeyError:
                ...
        running_service = develop[service].get("command")
        data[service] = {
            "require_postgre_db": require_db_support,
            "require_rabbit_mq": require_rabbit_mq,
            "database_name": required_db,
            "port": ", ".join(internal_ports),
            "volumes": ";".join(develop[service].get("volumes", [])),
            "running_service": running_service,
            "patch_command": internal_ports
            and any([int_p in running_service for int_p in internal_ports]),
        }
    return _export_meta(
        DEVELOP_COLLECT,
        os.path.join(project_folder, ".meta/develop.tbs"),
        **{"develop_services": data},
    )


def _export_dependencies(dependencies: dict, project_folder: str):
    return _export_meta(
        DEPENDENCIES_COLLECT,
        os.path.join(project_folder, ".meta/dependencies.tbs"),
        **dependencies,
    )


def export_service(project: str, user: str):
    settings = Settings(current_user=user)
    if not project:
        raise ValueError(
            f"Project Error. Expected STR instance, got {type(project)} instead"
        )

    project_folder = os.path.join(settings.sources.monorepo_path, project)
    develop, dep, nets = collect(project_folder)
    if not develop:
        raise TypeError("Noting to collect")
    return _export_develop(develop, project_folder)


def has_metadata(project, user, kind: str = "develop"):
    settings = Settings(current_user=user)
    return os.path.exists(
        os.path.join(settings.sources.monorepo_path, project, f".meta/{kind}.tbs")
    )


def get_project_metadata(project, user, kind: str = "develop"):
    print(f"> Retrieving {os.path.basename(project).capitalize()}'s metadata ...")
    settings = Settings(current_user=user)
    _meta_file = os.path.join(
        settings.sources.monorepo_path, project, f".meta/{kind}.tbs"
    )
    if not has_metadata(project, user=user):
        raise IOError(
            f"Metadata Error. Project {os.path.basename(project).upper()} metadata not found."
        )
    print(f"Metadata file {_meta_file}")
    try:
        _meta = ConfigParser()
        _meta.read(_meta_file)
        print("Metadata ends!")
        return _meta
    except Exception as read_meta_error:
        raise ValueError(
            f"Metadata Error. Corrupted metadata file. {read_meta_error}"
        ) from read_meta_error


def build_container_port(service, **kwargs) -> Union[list, None]:
    meta = kwargs.get("meta")
    if not isinstance(meta, ConfigParser):
        raise TypeError(
            f"Metadata Error. Expected ConfigParser instance, got {type(meta)} instead"
        )
    idx = kwargs.get("idx", 0)
    internal_port = meta[service].get("ContainerPort")
    if not internal_port:
        return
    external_port = internal_port
    if internal_port == "8000":
        external_port = f"80{80 + idx}"
    return [f"{external_port}:{internal_port}"]


ENV_KNOWN_VARIABLES = {
    "DATABASE_HOST": lambda *a, **kw: "tokko_broker_pg_db",
    "DATABASE_PORT": lambda *a, **kw: 5432,
    "DATABASE_USER": lambda *a, **kw: "tokkobroker_user",
    "DATABASE_PASSWORD": lambda *a, **kw: "tokkobroker_pwd",
    "BROKER_URL": lambda *a, **kw: "amqp://tokko:tokko@rabbitmq:5672/tokko",
}


def collect_required_dbs(services_stack: dict) -> str:
    databases = []
    for srv in services_stack:
        try:
            srv_environ = services_stack[srv]["environment"]
            database_name = srv_environ["DATABASE_NAME"]
            if database_name not in databases:
                databases.append(database_name)
        except (KeyError, ValueError):
            ...
    return " ".join(databases)


def build_environment_vars(service: str, project: str, user: str, **kwargs) -> dict:
    settings = Settings(current_user=user)
    project_folder = os.path.join(settings.sources.monorepo_path, project)
    docker_compose = get_docker_compose_project(project_folder)
    service_env = docker_compose["develop"][service].get("environment", {})
    for key in ENV_KNOWN_VARIABLES:
        if key in service_env.keys():
            service_env[key] = ENV_KNOWN_VARIABLES[key]()
    return service_env


def build_volumes(service, **kwargs) -> Union[list, None]:
    meta = kwargs.get("meta")
    if not isinstance(meta, ConfigParser):
        raise TypeError(
            f"Metadata Error. Expected ConfigParser instance, got {type(meta)} instead"
        )
    try:
        project = kwargs["project"]
        if not project or not isinstance(project, str):
            raise ValueError(
                f"Expected non-empty str instance, got {type(project)} instead"
            )
    except (KeyError, ValueError, TypeError) as err:
        raise TypeError(f"Project Error. {err}")
    volumes = meta[service].get("Volumes", "")
    if not volumes:
        return
    volumes = volumes.split(";")
    _res = []
    for idx, volume in enumerate(volumes):
        # Chinese man in da Haus! :P
        _external, _internal = volume.split(":")
        _external = _external[1:] if _external[0] == "." else _external
        _external = (
            _external[1:] if len(_external) > 0 and _external[0] == "/" else _external
        )
        _external = f"./{project}{f'/{_external}' if _external else ''}"
        _res.append(f"{_external}:{_internal}")
    return _res


def import_project(project, user):
    print(f"> Importing {os.path.basename(project).capitalize()} ...")
    stack = {}
    _meta = get_project_metadata(project, user=user)
    db_is_required = None
    rabbit_is_required = None
    print(f"Meta.SECTIONS = {_meta.sections()}")
    for idx, service in enumerate(_meta.sections()):
        container_name = service.replace("-", "_")
        dependencies = []
        project_name = os.path.basename(project)
        if _meta[service]["RequirePostgreDB"]:
            db_is_required = _meta[service]["DatabaseName"]
            dependencies = ["pg_database"]
        if _meta[service].get("RequireRabbitMQ"):
            rabbit_is_required = project_name
            dependencies += ["rabbitmq"]

        nw_service = {
            "build": f"./{project_name}",
            "image": f"{project_name}_service",
            "container_name": container_name,
            "restart": "always",
            "environment": build_environment_vars(
                service, project=project_name, user=user
            ),
            "volumes": build_volumes(service, meta=_meta, project=project_name),
            "ports": build_container_port(service, meta=_meta, idx=idx),
            "depends_on": dependencies,
            "command": _meta[service]["Command"],
            "networks": [f"{net}" for net in PLATFORM_NETWORKS],
        }
        stack[service] = nw_service
    return stack, db_is_required, rabbit_is_required


def prepare_db_service(services_stack):
    POSTGRE_DATABASE["environment"]["DATABASES"] = collect_required_dbs(services_stack)
    POSTGRE_DATABASE["networks"] = [f"{net}" for net in PLATFORM_NETWORKS]
    return POSTGRE_DATABASE


def prepare_rmq_service():
    RABBIT_MQ_SERVICE["networks"] = [f"{net}" for net in PLATFORM_NETWORKS]
    return RABBIT_MQ_SERVICE


def import_all_projects(user: str, **options):
    srv_require_db = []
    srv_require_rmq = []
    stack = {}
    as_json = options.get("as_json", False)
    settings = Settings(current_user=user)
    print("Searching for projects ...")
    all_projects = get_all_project_folders(settings.sources.monorepo_path)
    print(f"{len(all_projects)} projects were found.")
    for pix, project in enumerate(all_projects):
        try:
            print(f"Processing project {pix}/{len(all_projects)}")
            project_name = os.path.basename(project)
            project_services, db, rmq = import_project(project, user=user)
            print(f"> Resolving {project_name.upper()} dependencies ...")
            srv_require_db.append(db)
            srv_require_rmq.append(project_name)
            stack.update(project_services)
        except IOError as import_err:
            print(f"Project {os.path.basename(project).upper()} omitted. {import_err}")
    if not stack:
        raise IOError(
            "Empty Stack Error.\n"
            "Remember always run 'tokky project export {your-project}' at first."
        )
    if any(srv_require_db):
        stack["pg_database"] = prepare_db_service(stack)
    if any(srv_require_rmq):
        stack["rabbitmq"] = prepare_rmq_service()
    # Add project Network
    stack["networks"] = PLATFORM_NETWORKS
    if as_json:
        return json.dumps(stack, indent=4)
    return yaml.safe_dump(stack)


# Project NEW
def create_dependencies(service: str, dependencies: dict) -> dict:
    dependencies_settings = {
        "networks": [f"{service}_srv_network"],
        "container_name": [f"{service}_srv_network"],
    }
    dependencies_environment = {
        "POSTGRES_DB": f"{service}_service_db",
        "POSTGRES_USER": f"{service}_service_user",
        "POSTGRES_PASSWORD": f"{service}_service_pwd",
    }
    for dep in dependencies:
        dependencies[dep]["container_name"] = f"{service}_{dep}"
        dependencies[dep]["networks"] = [f"{service}_srv_network"]
        if dep == "pg_database":
            dependencies[dep]["volumes"] = [
                f"~/data/{service}-service/postgres:/var/lib/postgresql/data"
            ]

        for env_var in dependencies[dep].get("environment", {}):
            try:
                dependencies[dep]["environment"][env_var] = dependencies_environment[
                    env_var
                ]
            except KeyError:
                ...
    return dependencies


def create_main_service_django(service: str, develop: dict) -> dict:
    project_settings = {
        "image": f"{service}-service",
        "container_name": f"{service}_srv_container",
        "networks": [f"{service}_srv_network"],
    }
    project_environment = {
        "DATABASE_HOST": f"{service}_srv_database",
        "DATABASE_PORT": 5432,
        "DATABASE_NAME": f"{service}_srv_db",
        "DATABASE_USER": f"{service}_srv_user",
        "DATABASE_PASSWORD": f"{service}_srv_pwd",
        "RPC_PROVIDER_HOST": f"{service}-rpc-worker",
    }
    srv_names = {}
    for srv in develop:
        kind = srv[11:-8]
        srv_names[srv] = f"{service}-{kind}-service" if kind else service
        for entry in develop[srv]:
            try:
                value = project_settings[entry]
                if isinstance(value, str) and kind:
                    value += f"_{kind}"
                develop[srv][entry] = value
            except KeyError:
                ...
            try:
                for _var in develop[srv]["environment"]:
                    try:
                        develop[srv]["environment"][_var] = project_environment[_var]
                    except KeyError:
                        ...
            except KeyError:
                ...
    return {srv_names[srv]: develop[srv] for srv in develop}


def power_by_django(project_path) -> str:
    project = os.path.basename(project_path).capitalize()
    if not os.path.exists(project_path):
        raise IOError(f"{project} home folder does not exists!")
    if not os.path.isdir(project_path):
        raise IOError(f"{project} home should be a directory!")
    project_settings_py = os.path.join(project_path, "service/settings.py")
    project_wsgi_py = os.path.join(project_path, "service/wsgi.py")
    if not os.path.exists(project_settings_py):
        raise IOError(f"Project {project} not contains django settings file.")
    if not os.path.exists(project_wsgi_py):
        raise IOError(f"Project {project} not contains django wsgi file.")
    return project, project_settings_py, project_wsgi_py


def patch_django_config(project_path: str):
    project, _settings, _wsgi = power_by_django(project_path)
    project = project.replace("-", "_").lower()
    dj_settings = open(_settings, "r").readlines()
    dj_settings = [line.replace("my_awesome", project) for line in dj_settings]
    with open(_settings, "w") as dj_conf:
        dj_conf.writelines(dj_settings)


def initialize_project(service: str, user: str, service_type: str = None) -> tuple:
    settings = Settings(current_user=user)
    service_type = service_type or "django"
    # Collecting template
    template_path = os.path.join(
        settings.sources.monorepo_path,
        f"tools/templates/{service_type}-service-template",
    )
    develop, dep, nets = collect(template_path)
    if not service_type == "django":
        raise NotImplemented("Opsss!... Really sorry(Seriously).\n"
                             "On my defense i'll say just this:\n"
                             " _...Django it ten times more funniest!..._")
    else:
        stack = {
            "services": {
                **create_main_service_django(service, develop),
                **create_dependencies(service, dep)},
            "networks": {f"{service}_srv_network": {"driver": "bridge"}},
        }
        print(f"cachete {json.dumps(stack, indent=4)}")
        project_home = os.path.join(settings.sources.monorepo_path, service)
        compose_filename = os.path.join(project_home, "docker-compose.yml")
        with open(compose_filename, "w") as yaml_file:
            yaml_file.write(yaml.safe_dump(stack))
        patch_django_config(project_home)
        return os.path.dirname(compose_filename), stack


def create(new_project: str, user: str, **options):
    settings = Settings(current_user=user)
    existing_projects = get_all_project_folders(settings.sources.monorepo_path)
    new_project_path = os.path.join(settings.sources.monorepo_path, new_project)
    forced = options.get("forced", True)
    if new_project_path in existing_projects and not forced:
        raise IOError(f"Project {new_project.upper()} already exists!")
    if os.path.exists(new_project_path):
        if not forced:
            raise OSError(f"Project {new_project.upper()} folder is not empty!")
        shutil.rmtree(new_project_path, ignore_errors=True)
    service_type = options.get("kind", "django")
    template = f"{service_type}-service-template"
    template_path = f"tools/templates/{template}"
    print(f"Creating Service {service_type.upper()} based on template {template} ...")
    try:
        shutil.copytree(
            os.path.join(settings.sources.monorepo_path, template_path),
            new_project_path,
        )
    except Exception as copy_err:
        print(f"Service {service_type} deploy fails. {copy_err}")
        raise IOError() from copy_err
    _path, stack = initialize_project(new_project, user=user, service_type=service_type)
    return {
        "project": {
            "home": _path,
            "name": new_project,
            "services_stack": stack
        }
    }
