import asyncio  # pytype: disable=pyi-error
import os
import json
import shutil
import subprocess
import sys
import yaml

import aiohttp
import click
import dask
from distributed.utils import tmpfile

from coiled.identifiers import parse_identifier, ParseIdentifierError

CONTEXT_SETTINGS = {"help_option_names": ["-h", "--help"]}
CONDA_COMMAND = os.environ.get("CONDA_EXE", "conda")


@click.command(
    context_settings=CONTEXT_SETTINGS,
    help="Create Coiled conda software environment locally",
)
@click.argument("coiled_uri")
def install(coiled_uri: str):
    """ Create a Coiled software environment locally

    Parameters
    ----------
    coiled_uri
        Identifier of the software environment to use, in the format (<account>/)<name>. If the software environment
        is owned by the same account as that passed into "account", the (<account>/) prefix is optional.

        For example, suppose your account is "wondercorp", but your friends at "friendlycorp" have an environment
        named "xgboost" that you want to use; you can specify this with "friendlycorp/xgboost". If you simply
        entered "xgboost", this is shorthand for "wondercorp/xgboost".

        The "name" portion of (<account>/)<name> can only contain ASCII letters, hyphens and underscores.

    Examples
    --------
    >>> import coiled
    >>> coiled.install("coiled/default")

    """

    if shutil.which("conda") is None:
        raise RuntimeError("Conda must be installed in order to use 'coiled install'")

    # Validate input coiled_uri
    try:
        account, name = parse_identifier(coiled_uri, "coiled_uri")
    except ParseIdentifierError:
        account = None
    if account is None:
        raise Exception(
            f'Invalid coiled_uri, should be in the format of "<account>/<env_name>" but got "{coiled_uri}"'
        )

    asyncio.run(main(account, name))


async def main(account, name):
    # Get packages installed locally
    local_env_name = f"coiled-{account}-{name}"
    local_packages = conda_package_versions(local_env_name)
    # Get packages installed remotely
    solved_spec = await get_solved_spec(account, name)
    remote_packages = spec_to_package_version(solved_spec)
    if any(
        local_packages.get(package) != version
        for package, version in remote_packages.items()
    ):
        print(f"Creating local conda environment for {account}/{name}")
        await create_conda_env(name=local_env_name, spec=solved_spec)
    else:
        print(
            f"Coiled software environment for {account}/{name} found!"
            f"\n\nTo activate this environment, use"
            f"\n\n\tconda activate {local_env_name}\n"
        )

    # TODO: Activate local conda environment


def spec_to_package_version(spec: dict) -> dict:
    """ Formats package version information

    Parameters
    ----------
    spec
        Solved Coiled conda software environment spec

    Returns
    -------
        Mapping that contains the name and version of each package
        in the spec
    """
    dependencies = spec.get("dependencies", {})
    result = {}
    for dep in dependencies:
        package, version = dep.split("=")
        result[package] = version
    return result


async def get_solved_spec(account: str, name: str, platform: str = None) -> dict:
    """ Retrieve solved spec for a Coiled software environment

    Parameters
    ----------
    account
        Coiled account name
    name
        Software environment name (without account prefix)
    platform
        Platform to get solved spec for. Options are "linux", "osx", "windows".
        Defaults to the current system's platform.

    Returns
    -------
    spec
        Solved Coiled conda software environment spec
    """
    token = dask.config.get("coiled.cloud.token")
    async with aiohttp.ClientSession(
        headers={"Authorization": "Token " + token}
    ) as session:
        server = dask.config.get("coiled.cloud.server")
        response = await session.request(
            "GET", server + f"/api/v1/{account}/software_environments/{name}/?cli=true",
        )
        if response.status >= 400:
            text = await response.text()
            raise Exception(text)

        results = await response.json()
        if platform is None:
            # Determine platform
            if sys.platform == "linux":
                platform = "linux"
            elif sys.platform == "darwin":
                platform = "osx"
            elif sys.platform == "win32":
                platform = "windows"
            else:
                raise ValueError(f"Invalid platform {sys.platform} encountered")

        return yaml.safe_load(results[f"solved_spec_{platform}"])


async def create_conda_env(name: str, spec: str):
    """ Create a local conda environment from a solved Coiled conda spec

    Parameters
    ----------
    name
        Name of the local conda environment to create
    spec
        Solved Coiled conda software environment spec
    """
    # Ensure ipython and coiled are installed when pulling down
    # software environments locally
    spec["dependencies"].append({"pip": ["coiled", "ipython", "ipykernel"]})
    with tmpfile(extension="yml") as fn:
        with open(fn, mode="w") as f:
            yaml.dump(spec, f)

        proc = await asyncio.create_subprocess_shell(
            f"{CONDA_COMMAND} env create --force -n {name} -f {f.name}",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )

        while proc.returncode is None:
            await asyncio.sleep(0.5)
            async for line in proc.stdout:
                print(line.decode(), end="")
            async for line in proc.stderr:
                print(line.decode(), end="")


def parse_conda_command(cmd: list):
    if "--json" not in cmd:
        raise ValueError(
            "Must use the --json option when attempting to parse conda command output"
        )
    output = subprocess.check_output(cmd)
    result = json.loads(output)
    return result


def conda_package_versions(name: str) -> dict:
    """ Return pacakge name and version for each conda installed pacakge

    Parameters
    ----------
    name
        Name of conda environment

    Returns
    -------
    results
        Mapping that contains the name and version of each installed package
        in the environment
    """
    cmd = [CONDA_COMMAND, "env", "export", "-n", name, "--no-build", "--json"]
    output = parse_conda_command(cmd)
    output = output.get("dependencies", [])
    results = {}
    for i in output:
        if isinstance(i, str):
            package, version = i.split("=")
            results[package] = version
        else:
            # TODO: Use pip installed package information which is currently ignored
            assert isinstance(i, dict), type(i)
            assert list(i.keys()) == ["pip"], list(i.keys())
    return results
