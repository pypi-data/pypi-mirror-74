#  Copyright (c) 2015, Enthought, Inc.
#  All rights reserved.
#
#  This software is provided without warranty under the terms of the BSD
#  license included in LICENSE and may be redistributed only under the
#  conditions described in the aforementioned license.  The license is also
#  available online at https://opensource.org/licenses/BSD-3-Clause.
from datetime import datetime
import json
import textwrap

import responses

from hatcher.core.url_templates import URLS_V0
from hatcher.testing import unittest
from hatcher.tests.common import MainTestingMixin
from hatcher.cli import main


class TestApiTokensMain(MainTestingMixin, unittest.TestCase):
    def setUp(self):
        MainTestingMixin.setUp(self)

        self.api_version = "0"
        self.host = "http://brood-dev"

        self.initial_args = [
            "-u", self.host, "--api-version", self.api_version
        ]

    @responses.activate
    def test_create_api_token(self):
        # Given
        host = 'http://brood-dev'

        token_name = 'my-token'
        token = 'some-token'
        return_value = {'name': token_name, 'token': token}

        expected = textwrap.dedent("""\
        New Token Name    New Token
        ----------------  -----------
        {0: <16}  {1}
        """.format(token_name, token))

        responses.add(
            responses.POST,
            '{host}{uri}'.format(
                host=host,
                uri=URLS_V0.tokens.api.format(),
            ),
            status=200,
            body=json.dumps(return_value),
            content_type='application/json',
        )

        # When
        args = self.initial_args + ['api-tokens', 'create', token_name]
        result = self.runner.invoke(main.hatcher, args)

        # Then
        self.assertMultiLineEqual(result.output, expected)

    @responses.activate
    def test_delete_api_token(self):
        # Given
        host = 'http://brood-dev'

        token_name = 'my-token'

        responses.add(
            responses.DELETE,
            '{host}{uri}'.format(
                host=host,
                uri=URLS_V0.tokens.api.delete.format(name=token_name),
            ),
            status=204,
        )

        initial_args = self.initial_args + ['api-tokens', 'delete']
        final_arg = [token_name]

        r_output = "API token '{0}' will be deleted. Proceed? [y/N]: "

        # When
        args = initial_args + final_arg
        result = self.runner.invoke(main.hatcher, args, input='N')

        # Then
        self.assertEqual(result.exit_code, 0)
        self.assertTrue(result.output.startswith(r_output.format(token_name)))
        self.assertEqual(len(responses.calls), 0)

        # When
        args = initial_args + final_arg
        result = self.runner.invoke(main.hatcher, args, input='Y')

        # Then
        self.assertEqual(result.exit_code, 0)
        self.assertTrue(result.output.startswith(r_output.format(token_name)))
        self.assertEqual(len(responses.calls), 1)

        # When
        args = initial_args + ['-y'] + final_arg
        result = self.runner.invoke(main.hatcher, args)

        # Then
        self.assertEqual(result.exit_code, 0)
        self.assertEqual(result.output, '')
        self.assertEqual(len(responses.calls), 2)

    @responses.activate
    def test_list_api_tokens(self):
        # Given
        host = 'http://brood-dev'
        tokens = [
            {
                'name': 'token1',
                'created': datetime(2014, 1, 1, 1, 2, 2, 2).isoformat(),
                'last_used': datetime(2014, 2, 3, 4, 5, 6, 7).isoformat(),
            },
            {
                'name': 'token3',
                'created': datetime(2013, 3, 3, 3, 4, 4, 4).isoformat(),
                'last_used': None,
            },
            {
                'name': 'token2',
                'created': datetime(2013, 2, 2, 2, 3, 3, 3).isoformat(),
                'last_used': datetime(2014, 7, 6, 5, 4, 3, 2).isoformat(),
            },
        ]

        expected = textwrap.dedent("""\
        Name    Created                     Last Used
        ------  --------------------------  --------------------------
        token1  2014-01-01T01:02:02.000002  2014-02-03T04:05:06.000007
        token2  2013-02-02T02:03:03.000003  2014-07-06T05:04:03.000002
        token3  2013-03-03T03:04:04.000004
        """)

        responses.add(
            responses.GET,
            '{host}{uri}'.format(
                host=host,
                uri=URLS_V0.tokens.api.format(),
            ),
            status=200,
            body=json.dumps({'tokens': tokens}),
            content_type='application/json',
        )

        # When
        args = self.initial_args + ['api-tokens', 'list']
        result = self.runner.invoke(main.hatcher, args)

        # Then
        self.assertEqual(result.output, expected)
