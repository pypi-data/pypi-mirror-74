#  Copyright (c) 2013, Enthought, Inc.
#  All rights reserved.
#
#  This software is provided without warranty under the terms of the BSD
#  license included in LICENSE and may be redistributed only under the
#  conditions described in the aforementioned license.  The license is also
#  available online at https://opensource.org/licenses/BSD-3-Clause.
from __future__ import absolute_import, print_function

import click

from hatcher import __version__
from hatcher.core.auth import BroodClientAuth
from hatcher.core.model_registry import MAX_API_VERSION
from hatcher.utils import command_tree_option
from .utils import BroodClientProxy, HatcherClickGroup

CONTEXT_SETTINGS = dict(help_option_names=['-h', '--help'])


api_versions = [str(i) for i in range(0, MAX_API_VERSION + 1)]


@click.group(cls=HatcherClickGroup, context_settings=CONTEXT_SETTINGS)
@click.option('-u', '--url', help='The URL of EDS.  [required]')
@click.option('-U', '--username', help='Username for authentication.')
@click.option(
    '-p', '--password',
    help=('Password for authentication. If --username is given but '
          'password is omitted, hatcher will prompt for a password.')
)
@click.option(
    '-t', '--token',
    help=('EDS API token for authentication. '
          '(Not applicable to on-site EDS.)')
)
@click.option('-k', '--insecure', is_flag=True, default=False,
              help='Disable SSL certificate verification')
@click.option('-d', '--debug', is_flag=True, default=False,
              help='Show traceback on error')
@click.option('--api-version', default=str(MAX_API_VERSION),
              type=click.Choice(api_versions), is_eager=True)
@command_tree_option(help='Print the full hatcher command tree.')
@click.version_option(__version__, prog_name='hatcher')
@click.pass_context
def hatcher(ctx, url, username=None, password=None, token=None,
            insecure=False, debug=False, api_version=None):
    """A command-line interface to Enthought Deployment Server (EDS).
    """
    verify_ssl = not insecure
    if insecure:
        from requests.packages.urllib3 import disable_warnings
        from requests.packages.urllib3.exceptions import InsecureRequestWarning
        disable_warnings(InsecureRequestWarning)

    if username is None and password is not None:
        ctx.fail('Password provided with no username')
    if username is not None and password is None:
        password = click.prompt('Password', hide_input=True)

    if username is not None:
        auth = BroodClientAuth(url, (username, password),
                                    verify_ssl=verify_ssl)
    elif token is not None:
        auth = BroodClientAuth(url, token, verify_ssl=verify_ssl)
    else:
        auth = None

    url_param = next(param for param in hatcher.params
                     if param.name == 'url')
    ctx.obj = BroodClientProxy(
        url, auth, int(api_version), url_param, ctx, verify_ssl=verify_ssl,
        debug=debug)


def main():
    return hatcher(auto_envvar_prefix='HATCHER')
