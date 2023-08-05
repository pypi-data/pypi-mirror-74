from typing import List, Dict
import os
from janis_assistant.management.configuration import JanisConfiguration

from janis_assistant.data.container.parse_pattern import (
    docker_string_regex,
    docker_hash_regex,
)
from janis_assistant.data.container.info import *
from janis_assistant.data.container.registries import *


def get_digests_from_containers(
    containers: List[str], skip_cache=False
) -> Dict[str, str]:
    retval = {}
    for container in containers:
        digest = get_digest_from_container(container, skip_cache=skip_cache)
        if digest:
            retval[container] = digest

    return retval


def get_digest_from_container(container: str, skip_cache=False):
    try:
        if not skip_cache:
            from_cache = try_lookup_in_cache(container)
            if from_cache:
                return from_cache

        ci = ContainerInfo.parse(container)
        if not ci.has_hash:
            registry = ContainerRegistry.from_host(ci.host).to_registry()
            digest = registry.get_digest(ci)
            new_container = ci.to_string(chash=digest)
            if not skip_cache:
                try_write_digest_to_cache(container, new_container)
            return new_container
        else:
            Logger.debug(
                f"Not getting hash for '{container}' has parsing things there's already a hash."
            )
            return None
    except Exception as e:
        Logger.critical(f"Couldn't get digest for {str(container)}: {str(e)}")


def get_cache_path_from_container(container: str) -> str:
    cache_path = JanisConfiguration.manager().digest_cache_location

    os.makedirs(cache_path, exist_ok=True)
    container_cache_path = os.path.join(
        cache_path, ContainerInfo.convert_to_filename(container)
    )
    return container_cache_path


def try_lookup_in_cache(container: str) -> Optional[str]:
    container_cache_path = get_cache_path_from_container(container)
    if not os.path.exists(container_cache_path):
        return None
    try:
        with open(container_cache_path, "r") as f:
            cached_container = f.read().strip()
            Logger.info(f"Found cached digest of {container} at {container_cache_path}")
            return cached_container

    except Exception as e:
        Logger.debug(
            "Couldn't load container from cache, even though it existed: " + str(e)
        )
        return None


def try_write_digest_to_cache(container: str, container_with_contents):
    container_cache_path = get_cache_path_from_container(container)
    if os.path.exists(container_cache_path):
        return Logger.log(
            f"Went to write digest to cache path, but this file already existed: {container_cache_path}"
        )

    try:
        with open(container_cache_path, "w+") as f:
            f.write(container_with_contents)
    except Exception as e:
        Logger.debug(
            f"Couldn't cache digest to path ({container_cache_path}) for reason: {str(e)}"
        )
