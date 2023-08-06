#  Copyright (c) 2013, Enthought, Inc.
#  All rights reserved.
#
#  This software is provided without warranty under the terms of the BSD
#  license included in LICENSE and may be redistributed only under the
#  conditions described in the aforementioned license.  The license is also
#  available online at https://opensource.org/licenses/BSD-3-Clause.
from __future__ import absolute_import

from warnings import warn

from .brood_url_handler import BroodURLHandler
from .model_registry import ModelRegistry
from .url_templates import URLS_V0, URLS_V1


class BroodClient(object):
    """``BroodClient`` is the top level entry point into the ``hatcher``
    API.

    """

    def __init__(self, url_handler, api_version=0):
        self._url_handler = url_handler
        self._model_registry = ModelRegistry(api_version=api_version)

        if api_version == 0:
            self._urls = URLS_V0
        elif api_version == 1:
            self._urls = URLS_V1
        else:
            raise ValueError(
                "Unsupported api_version {!r}".format(api_version)
            )

    @property
    def _api_version(self):
        """ Return the API version. Maintained for backwards compatibility."""
        warn(
            'This property has been deprecated. Please use the public '
            '`api_version` property instead.',
            DeprecationWarning
        )
        return self.api_version

    @property
    def api_version(self):
        """ Return the API version."""
        return self._model_registry.api_version

    @classmethod
    def from_url(cls, url, auth=None, verify_ssl=True, api_version=0):
        """Create a ``BroodClient`` from a Brood URL and authentication
        information.

        """
        url_handler = BroodURLHandler.from_auth(
            url, auth=auth, verify_ssl=verify_ssl)
        return cls(url_handler=url_handler, api_version=api_version)

    @classmethod
    def from_session(cls, url, session, api_version=0):
        """Create a ``BroodClient`` from a Brood URL and pre-configured
        ``requests.Session`` instance.

        """
        url_handler = BroodURLHandler.from_session(url, session)
        return cls(url_handler=url_handler, api_version=api_version)

    def create_organization(self, name, description):
        """Create a new organization called ``name`` with the description
        ``description``.

        Parameters
        ----------
        name : str
            The name of the organization.
        description : str
            The description of the organization.

        Returns :class:`~hatcher.core.organization.Organization`

        """
        data = {
            'name': name,
            'description': description,
        }
        path = self._urls.admin.organizations.format()
        self._url_handler.post(path, data)
        return self.organization(name)

    def organization(self, name):
        """Get an existing organization.

        Parameters
        ----------
        name : str
            The name of the organization.

        Returns :class:`~hatcher.core.organization.Organization`

        """
        return self._model_registry.Organization(
            name, url_handler=self._url_handler,
            model_registry=self._model_registry)

    def list_organizations(self):
        """List all organizations in the brood server.

        """
        path = self._urls.admin.organizations.format()
        data = self._url_handler.get_json(path)
        return list(sorted(data['organizations']))

    def create_api_token(self, name):
        """Create a new API token for the current user.

        Parameters
        ----------
        name : str
            The name for the new token.

        Returns
        -------
        token : dict
            Dict containing the token and its name.

        """
        path = self._urls.tokens.api.format()
        data = {'name': name}
        response = self._url_handler.post(path, data)
        return response.json()

    def delete_api_token(self, name):
        """Delete the user's named API token.

        Parameters
        ----------
        name : str
            The name of the token to delete.

        """
        path = self._urls.tokens.api.delete.format(name=name)
        self._url_handler.delete(path)

    def list_api_tokens(self):
        """List the metadata of user's API tokens.

        .. note::
            This does not list the actual token that can be used for
            authentication, just the metadata ``name``, ``created`` and
            ``last_used``.

        Returns
        -------
        tokens : list
            List of metadata for all of the user's active tokens.

        """
        path = self._urls.tokens.api.format()
        tokens = self._url_handler.get_json(path)
        return tokens['tokens']

    def list_platforms(self):
        """List all platforms supported by the Brood server.

        Returns
        -------
        platforms : list
            List of platform names.

        """
        path = self._urls.metadata.platforms.format()
        platforms = self._url_handler.get_json(path)
        return platforms['platforms']

    def list_python_tags(self, list_all=False):
        """List PEP425 Python Tags supported by the Brood server.

        Parameters
        ----------
        list_all : bool
            If ``False`` (default), will only list the tags that
            correspond to an actual Python implementation and version.
            If ``True``, list all possible tags.

        Returns
        -------
        tags : list
            List of Python tags.

        """
        if list_all:
            path = self._urls.metadata.python_tags.all.format()
        else:
            path = self._urls.metadata.python_tags.format()
        python_tags = self._url_handler.get_json(path)
        return python_tags['python_tags']

    def list_available_repositories(self, include_indexable=False):
        """List the repositories to which the user has at least read access.
        When the optional ``include_indexable`` flag is ``True``, the
        list will additionally include repositories to which the user
        only has indexable access.

        Parameters
        ----------
        include_indexable : bool
            When ``True``, the list will additionally include
            repositories to which the user only has indexable
            access. (Default: ``False``)

        """
        path = self._urls.user.repositories.format()

        if self.api_version == 0:
            return self._url_handler.get_json(
                path, include_indexable=include_indexable
            )['repositories']

        repos = self._url_handler.get_json(path)['repositories']

        if not include_indexable:
            repos = (r for r in repos if r['access'] != 'read_index')

        return [r['name'] for r in repos]
