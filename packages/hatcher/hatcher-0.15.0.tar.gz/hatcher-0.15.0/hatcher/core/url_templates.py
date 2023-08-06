#  Copyright (c) 2014, Enthought, Inc.
#  All rights reserved.
#
#  This software is provided without warranty under the terms of the BSD
#  license included in LICENSE and may be redistributed only under the
#  conditions described in the aforementioned license.  The license is also
#  available online at https://opensource.org/licenses/BSD-3-Clause.
class UrlBuilder(object):

    def __init__(self, name, template, *children, **defaults):
        self.name = name
        self.template = template
        self.parent = None
        self.children = dict((child.name, child) for child in children)
        for child in self.children.values():
            child.set_parent(self)

        self._defaults = defaults.copy()

    def set_parent(self, parent):
        self.parent = parent

    @property
    def defaults(self):
        if self.parent is None:
            defaults = {}
        else:
            defaults = self.parent.defaults
        defaults.update(self._defaults)
        return defaults

    @property
    def full_template(self):
        if self.parent is None:
            root = ''
        else:
            root = self.parent.full_template
        return '{root}{leaf}'.format(root=root, leaf=self.template)

    def format(self, **kwargs):
        format_args = {}
        format_args.update(self.defaults)
        format_args.update(kwargs)
        return self.full_template.format(**format_args)

    def __getattr__(self, name):
        if name not in self.children:
            raise AttributeError(name)
        return self.children[name]

    def __iter__(self):
        yield self.full_template
        for name, child in sorted(self.children.items()):
            for template in child:
                yield template


URLS_V0 = UrlBuilder(
    'v0', '/api/v0/json',
    UrlBuilder(
        'admin', '/admin',
        UrlBuilder(
            'organizations', '/organizations',
            UrlBuilder('repositories', '/{organization_name}/repositories'),  # noqa
            UrlBuilder('teams', '/{organization_name}/teams'),
            UrlBuilder('users', '/{organization_name}/users'),
        ),
        UrlBuilder(
            'repositories', '/repositories/{organization_name}/{repository_name}'),  # noqa
        UrlBuilder(
            'teams', '/teams/{organization_name}/{team_name}',
            UrlBuilder(
                'members', '/members',
                UrlBuilder('query', '/{email}'),
            ),
            UrlBuilder(
                'repositories', '/repositories',
                UrlBuilder('query', '/{repository_name}'),
            ),
        ),
        UrlBuilder(
            'users', '/users',
            UrlBuilder('metadata', '/{organization_name}/{email}'),
        ),
    ),
    UrlBuilder(
        'tokens', '/auth/tokens',
        UrlBuilder(
            'api', '/api',
            UrlBuilder('delete', '/{name}'),
        ),
    ),
    UrlBuilder(
        'data', '/data/{organization_name}/{repository_name}',
        UrlBuilder(
            'apps', '/{platform}/apps',
            UrlBuilder('upload', '/upload'),
        ),
        UrlBuilder(
            'eggs', '/{platform}',
            UrlBuilder('upload', '/eggs/upload'),
            UrlBuilder(
                'download', '/{python_tag}/eggs/{name}/{version}'),
            UrlBuilder(
                'delete', '/{python_tag}/eggs/{name}/{version}'),
            UrlBuilder('re_index', '/eggs/re-index'),
        ),
        UrlBuilder(
            'runtimes', '/{platform}/runtimes',
            UrlBuilder('upload', '/upload'),
            UrlBuilder('download', '/{python_tag}/{version}'),
        ),
    ),
    UrlBuilder(
        'indices', '/indices/{organization_name}/{repository_name}/{platform}',  # noqa
        UrlBuilder('apps', '/apps'),
        UrlBuilder('eggs', '/{python_tag}/eggs'),
        UrlBuilder('runtimes', '/runtimes'),
    ),
    UrlBuilder(
        'metadata', '/metadata',
        UrlBuilder(
            'artefacts', '/{organization_name}/{repository_name}/{platform}',  # noqa
            UrlBuilder('apps', '/{python_tag}/apps/{app_id}/{version}'),
            UrlBuilder('eggs', '/{python_tag}/eggs/{name}/{version}'),
            UrlBuilder('runtimes', '/runtimes/{python_tag}/{version}'),
        ),
        UrlBuilder('platforms', '/platforms'),
        UrlBuilder(
            'python_tags', '/python-tags',
            UrlBuilder('all', '/all'),
        )
    ),
    UrlBuilder(
        'user', '/metadata/user',
        UrlBuilder('repositories', '/repositories'),
    ),
)


URLS_V1 = UrlBuilder(
    'v1', '/api/v1/json',
    UrlBuilder(
        'admin', '/admin',
        UrlBuilder(
            'organizations', '/organizations',
            UrlBuilder('repositories', '/{organization_name}/repositories'),  # noqa
            UrlBuilder('teams', '/{organization_name}/teams'),
            UrlBuilder('users', '/{organization_name}/users'),
        ),
        UrlBuilder(
            'repositories', '/repositories/{organization_name}/{repository_name}'  # noqa
        ),
        UrlBuilder(
            'teams', '/teams/{organization_name}/{team_name}',
            UrlBuilder(
                'members', '/members',
                UrlBuilder('query', '/{email}'),
            ),
            UrlBuilder(
                'repositories', '/repositories',
                UrlBuilder('query', '/{repository_name}'),
            ),
        ),
        UrlBuilder(
            'users', '/users',
            UrlBuilder('metadata', '/{organization_name}/{email}'),
        ),
    ),
    UrlBuilder(
        'data', '/data/{organization_name}/{repository_name}',
        UrlBuilder(
            'apps', '/{platform}/apps',
            UrlBuilder('upload', '/upload'),
        ),
        UrlBuilder(
            'eggs', '/{platform}',
            UrlBuilder('upload', '/eggs/upload'),
            UrlBuilder(
                'download', '/{python_tag}/eggs/{name}/{version}'),
            UrlBuilder(
                'delete', '/{python_tag}/eggs/{name}/{version}'),
            UrlBuilder('re_index', '/eggs/re-index'),
        ),
        UrlBuilder(
            'runtimes', '/{platform}/runtimes',
            UrlBuilder('upload', '/upload'),
            UrlBuilder('download', '/{implementation}/{version}'),
        ),
        UrlBuilder(
            'bundles',
            '/bundles',
            UrlBuilder('upload', '/upload')
        )
    ),
    UrlBuilder(
        'indices', '/indices/{organization_name}/{repository_name}/{platform}',  # noqa
        UrlBuilder('apps', '/apps'),
        UrlBuilder('eggs', '/{python_tag}/eggs'),
        UrlBuilder('runtimes', '/runtimes'),
        UrlBuilder('bundles', '/bundles'),
    ),
    UrlBuilder(
        'metadata', '/metadata',
        UrlBuilder(
            'artefacts', '/{organization_name}/{repository_name}/{platform}',  # noqa
            UrlBuilder('apps', '/{python_tag}/apps/{app_id}/{version}'),
            UrlBuilder('eggs', '/{python_tag}/eggs/{name}/{version}'),
            UrlBuilder('runtimes', '/runtimes/{implementation}/{version}'),
            UrlBuilder('bundles', '/bundles/{python_tag}/{name}/{version}'),
        ),
        UrlBuilder('platforms', '/platforms'),
        UrlBuilder(
            'python_tags', '/python-tags',
            UrlBuilder('all', '/all'),
        ),
    ),
    UrlBuilder(
        'tokens', '/auth/tokens',
        UrlBuilder(
            'api', '/api',
            UrlBuilder('delete', '/{name}'),
        ),
    ),
    UrlBuilder(
        'user', '/metadata/user',
        UrlBuilder('repositories', '/repositories'),
    ),
)


class URLS(object):
    """ Maintain backwards compatibility with version 0.10.x.

    The ``brood`` repository uses Hatcher and relies on the ``URLS``
    object being present in this module, with ``v0`` and ``v1``
    attributes available.
    """
    v0 = URLS_V0
    v1 = URLS_V1
