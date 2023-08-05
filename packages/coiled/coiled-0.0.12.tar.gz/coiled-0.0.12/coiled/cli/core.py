import click

from .login import login
from .install import install

CONTEXT_SETTINGS = {"help_option_names": ["-h", "--help"]}


@click.group(context_settings=CONTEXT_SETTINGS)
def cli():
    """ Coiled command line tool
    """
    pass


cli.add_command(login)
cli.add_command(install)
