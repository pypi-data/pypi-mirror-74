#  Copyright (c) 2014, Enthought, Inc.
#  All rights reserved.
#
#  This software is provided without warranty under the terms of the BSD
#  license included in LICENSE and may be redistributed only under the
#  conditions described in the aforementioned license.  The license is also
#  available online at https://opensource.org/licenses/BSD-3-Clause.
from hatcher.testing import unittest

from ..url_templates import UrlBuilder


URLS = UrlBuilder(
    'root', '/api',
    UrlBuilder(
        'v0', '/v0/json',
        UrlBuilder(
            'admin', '/admin',
            UrlBuilder(
                'organizations', '/organizations',
                UrlBuilder('repositories', '/{organization_name}/repositories'),  # noqa
                UrlBuilder('teams', '/{organization_name}/teams'),
                UrlBuilder('users', '/{organization_name}/users'),
            ),
        ),
        UrlBuilder('data', '/data'),
    ),
)


class TestUrlTemplates(unittest.TestCase):

    def test_root(self):
        self.assertEqual(URLS.format(), '/api')
        self.assertEqual(URLS.v0.format(), '/api/v0/json')

    def test_attribute_error(self):
        with self.assertRaises(AttributeError):
            URLS.v0.no_attr

    def test_simple_tree(self):
        self.assertEqual(URLS.v0.admin.format(), '/api/v0/json/admin')
        self.assertEqual(URLS.v0.admin.organizations.format(),
                         '/api/v0/json/admin/organizations')

    def test_iter(self):
        urls = list(URLS)
        expected = [
            '/api',
            '/api/v0/json',
            '/api/v0/json/admin',
            '/api/v0/json/admin/organizations',
            '/api/v0/json/admin/organizations/{organization_name}/repositories',  # noqa
            '/api/v0/json/admin/organizations/{organization_name}/teams',
            '/api/v0/json/admin/organizations/{organization_name}/users',
            '/api/v0/json/data',
        ]
        self.assertEqual(urls, expected)
