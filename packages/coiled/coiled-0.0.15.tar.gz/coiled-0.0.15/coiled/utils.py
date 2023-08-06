import os
import ssl
import tempfile
from typing import Union, Tuple
import yaml
import sys
import threading
import itertools
import time

import aiohttp
import click
import dask
from dask.distributed import Security


class GatewaySecurity(Security):
    """A security implementation that temporarily stores credentials on disk.

    The normal ``Security`` class assumes credentials already exist on disk,
    but our credentials exist only in memory. Since Python's SSLContext doesn't
    support directly loading credentials from memory, we write them temporarily
    to disk when creating the context, then delete them immediately."""

    def __init__(self, tls_key, tls_cert):
        self.tls_key = tls_key
        self.tls_cert = tls_cert

    def __repr__(self):
        return "GatewaySecurity<...>"

    def get_connection_args(self, role):
        with tempfile.TemporaryDirectory() as tempdir:
            key_path = os.path.join(tempdir, "dask.pem")
            cert_path = os.path.join(tempdir, "dask.crt")
            with open(key_path, "w") as f:
                f.write(self.tls_key)  # pytype: disable=wrong-arg-types
            with open(cert_path, "w") as f:
                f.write(self.tls_cert)  # pytype: disable=wrong-arg-types
            ctx = ssl.create_default_context(
                purpose=ssl.Purpose.SERVER_AUTH, cafile=cert_path
            )
            ctx.verify_mode = ssl.CERT_REQUIRED
            ctx.check_hostname = False
            ctx.load_cert_chain(cert_path, key_path)
        return {"ssl_context": ctx, "require_encryption": True}


def normalize_server(server):
    if server.endswith("ngrok.io"):
        server = "http://localhost:8000"

    return server


async def handle_credentials(
    server: str = None, save: Union[bool, None] = None
) -> Tuple[str, str, str]:
    """ Validate and optionally save credentials

    Parameters
    ----------
    server
        Server to connect to. If not specified, will check the
        ``coiled.server`` configuration value.
    save
        Whether or not save credentials to coiled config file.
        If ``None``, will ask for input on whether or not credentials
        should be saved. Defaults to None.

    Returns
    -------
    user
        Username
    token
        User API token
    server
        Server being used
    """
    # If testing locally with `ngrok` we need to
    # rewrite the server to localhost
    server = server or dask.config.get("coiled.server")
    server = normalize_server(server)
    login_url = f"{server}/profile"
    print(f"Please login to {login_url} to get your token")
    token = click.prompt(
        "Token", hide_input=True
    )  # Using click instead of getpass to make testing easier

    # Validate token and get username
    async with aiohttp.ClientSession(
        headers={"Authorization": "Token " + token}
    ) as session:
        response = await session.request("GET", server + "/api/v1/users/me/")
        data = await response.json()
        if response.status >= 400:
            if "Invalid token" in data.get("detail", ""):
                raise ValueError("Invalid Coiled token entered")
            else:
                raise Exception(data)

    user = data["username"]

    if save is None:
        # Optionally save user credentials for next time
        save_creds = input("Save credentials for next time? [Y/n]: ")
        if save_creds.lower() in ("y", "yes", ""):
            save = True
    if save:
        config_file = os.path.join(
            os.path.expanduser("~"), ".config", "dask", "coiled.yaml"
        )
        # Make sure directory with config exists
        os.makedirs(os.path.dirname(config_file), exist_ok=True)
        config = dask.config.collect_yaml([config_file])
        config = config[0] if config else {}

        config_creds = {"coiled": {"user": user, "token": token, "server": server}}
        config = dask.config.merge(config, config_creds)
        with open(config_file, "w") as f:
            f.write(yaml.dump(config))
        print(f"Credentials have been saved at {config_file}")
        # Make sure saved configuration values are set for the current Python process
        dask.config.set(
            {"coiled.user": user, "coiled.token": token, "coiled.server": server}
        )

    return user, token, server


class Spinner:
    """A spinner context manager to denotate we are still working"""

    def __init__(self, message, delay=0.2):
        self.spinner = itertools.cycle(["-", "/", "|", "\\"])
        self.delay = delay
        self.busy = False
        self.spinner_visible = False
        sys.stdout.write(message)

    def write_next(self):
        with self._screen_lock:
            if not self.spinner_visible:
                sys.stdout.write(next(self.spinner))
                self.spinner_visible = True
                sys.stdout.flush()

    def remove_spinner(self, cleanup=False):
        with self._screen_lock:
            if self.spinner_visible:
                sys.stdout.write("\b")
                self.spinner_visible = False
                if cleanup:
                    sys.stdout.write(" ")  # overwrite spinner with blank
                    sys.stdout.write("\r")  # move to next line
                sys.stdout.flush()

    def spinner_task(self):
        while self.busy:
            self.write_next()
            time.sleep(self.delay)
            self.remove_spinner()

    def __enter__(self):
        if sys.stdout.isatty():
            self._screen_lock = threading.Lock()
            self.busy = True
            self.thread = threading.Thread(target=self.spinner_task)
            self.thread.start()

    def __exit__(self, exception, value, tb):
        if sys.stdout.isatty():
            self.busy = False
            self.remove_spinner(cleanup=True)
        else:
            sys.stdout.write("\r")
