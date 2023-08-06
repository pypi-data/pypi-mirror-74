#  Copyright (c) 2015, Enthought, Inc.
#  All rights reserved.
#
#  This software is provided without warranty under the terms of the BSD
#  license included in LICENSE and may be redistributed only under the
#  conditions described in the aforementioned license.  The license is also
#  available online at https://opensource.org/licenses/BSD-3-Clause.
from contextlib import contextmanager
from datetime import datetime
import json
import re
import textwrap

import responses
import pytz
from requests.exceptions import HTTPError
from six.moves.urllib import parse
from tabulate import tabulate

from okonomiyaki.file_formats import split_egg_name

from hatcher.core.url_templates import URLS_V0
from hatcher.errors import ChecksumMismatchError
from hatcher.testing import unittest, make_testing_egg
from hatcher.tests.common import (
    MainTestingMixin, patch, patch_repository,
    CLIRUNNER_ERRCODE_ON_EXCEPTION)
from hatcher.cli import main, utils


class UploadEggResult(object):
    def __init__(self, testing_egg):
        self.testing_egg = testing_egg
        self.result = None

    @property
    def filename(self):
        return self.testing_egg.path


class TestUploadEggMain(MainTestingMixin, unittest.TestCase):

    def setUp(self):
        MainTestingMixin.setUp(self)
        self.host = 'http://brood-dev.invalid'
        self.initial_args = [
            '--api-version', '0',
            '--url', self.host, 'eggs', 'upload']
        self.final_args = [self.organization, self.repository, self.platform]

    def _upload_egg(self, metadata=None, force=False, verify=False,
                    debug=False):
        with self._upload_egg_context(
                metadata=metadata,
                force=force,
                verify=verify,
                debug=debug) as result:
            pass
        return result.filename, result.result

    @contextmanager
    def _upload_egg_context(self, metadata=None, force=False, verify=False,
                            debug=False):
        if metadata is None:
            metadata = {}
        initial_args = self.initial_args
        if force:
            initial_args = initial_args + ['--force']
        if verify:
            initial_args = initial_args + ['--verify']
        if debug:
            initial_args = ['--debug'] + initial_args

        with self.runner.isolated_filesystem() as tempdir:
            testing_egg = make_testing_egg(tempdir, **metadata)
            result = UploadEggResult(testing_egg)
            yield result
            result.result = self.runner.invoke(
                main.hatcher,
                args=initial_args + self.final_args + [testing_egg.path],
            )

    @responses.activate
    def test_without_force(self):
        # Given
        upload_url = '{host}{uri}'.format(
            host=self.host,
            uri=URLS_V0.data.eggs.upload.format(
                organization_name=self.organization,
                repository_name=self.repository,
                platform=self.platform,
            ),
        )
        responses.add(
            responses.POST,
            upload_url,
            status=200,
        )

        # When
        with patch.object(
                utils, 'get_localtime') as get_localtime:
            now = datetime(2016, 7, 9, 10, 29, 7, tzinfo=pytz.utc)
            get_localtime.return_value = now.astimezone(
                pytz.timezone('Europe/Helsinki'))
            filename, result = self._upload_egg(force=False)

        # Given
        expected_output = textwrap.dedent("""\
        Egg upload  {filename}
        Server      {url}
        Repository  {organization}/{repository}
        Platform    {platform}
        Time        {datetime}
        """).format(
            filename=filename,
            url=self.host,
            datetime='2016-07-09 13:29:07 EEST (+0300)',
            organization=self.organization,
            repository=self.repository,
            platform=self.platform,
        )

        # Then
        self.assertEqual(result.exit_code, 0)
        self.assertEqual(result.output, expected_output)

        self.assertEqual(len(responses.calls), 1)
        upload_request, = responses.calls

        parsed = parse.urlsplit(upload_request.request.url)
        used_upload_url = parse.urlunsplit(parsed[:3] + ('', ''))
        self.assertEqual(used_upload_url, upload_url)

    @patch_repository
    def test_with_force(self, Repository):
        # Given
        repository, platform_repo = self._mock_repository_class(Repository)
        upload_egg = platform_repo.upload_egg

        # When
        filename, result = self._upload_egg(force=True)

        # Then
        self.assertRepositoryConstructedCorrectly(Repository)
        repository.platform.assert_called_once_with(self.platform)
        upload_egg.assert_called_once_with(
            filename, overwrite=True, verify=False)
        self.assertEqual(result.exit_code, 0)

    @responses.activate
    def test_upload_no_verify(self):
        # Given
        metadata = {
            'name': 'nose',
            'version': '1.3.0',
            'build': 1,
            'python': '2.7'
        }

        upload_url = '{host}{uri}'.format(
            host=self.host,
            uri=URLS_V0.data.eggs.upload.format(
                organization_name=self.organization,
                repository_name=self.repository,
                platform=self.platform,
            ),
        )
        responses.add(
            responses.POST,
            upload_url,
            status=200,
        )

        # When
        filename, result = self._upload_egg(metadata=metadata)

        # Then
        self.assertEqual(result.exit_code, 0)
        self.assertEqual(len(responses.calls), 1)
        upload_request, = responses.calls

        parsed = parse.urlsplit(upload_request.request.url)
        used_upload_url = parse.urlunsplit(parsed[:3] + ('', ''))
        self.assertEqual(used_upload_url, upload_url)

    @responses.activate
    def test_upload_verify_no_upstream(self):
        # Given
        metadata = {
            'name': 'nose',
            'version': '1.3.0',
            'build': 1,
            'python': '2.7'
        }

        metadata_url = '{host}{uri}'.format(
            host=self.host,
            uri=URLS_V0.metadata.artefacts.eggs.format(
                organization_name=self.organization,
                repository_name=self.repository,
                platform=self.platform,
                python_tag='cp27',
                name='nose',
                version='1.3.0-1',
            ),
        )
        responses.add(
            responses.GET,
            metadata_url,
            status=404,
        )

        upload_url = '{host}{uri}'.format(
            host=self.host,
            uri=URLS_V0.data.eggs.upload.format(
                organization_name=self.organization,
                repository_name=self.repository,
                platform=self.platform,
            ),
        )
        responses.add(
            responses.POST,
            upload_url,
            status=200,
        )

        # When
        filename, result = self._upload_egg(metadata=metadata, verify=True)

        # Then
        self.assertEqual(result.exit_code, 0)
        self.assertEqual(len(responses.calls), 2)
        metadata_request, upload_request = responses.calls
        self.assertEqual(metadata_request.request.url, metadata_url)

        parsed = parse.urlsplit(upload_request.request.url)
        used_upload_url = parse.urlunsplit(parsed[:3] + ('', ''))
        self.assertEqual(used_upload_url, upload_url)

    @responses.activate
    def test_upload_verify_invalid(self):
        # Given
        metadata = {
            'name': 'nose',
            'version': '1.3.0',
            'build': 1,
            'python': '2.7'
        }
        server_metadata = {
            'sha256': 'abc123',
        }

        metadata_url = '{host}{uri}'.format(
            host=self.host,
            uri=URLS_V0.metadata.artefacts.eggs.format(
                organization_name=self.organization,
                repository_name=self.repository,
                platform=self.platform,
                python_tag='cp27',
                name='nose',
                version='1.3.0-1',
            ),
        )
        responses.add(
            responses.GET,
            metadata_url,
            content_type='application/json',
            status=200,
            body=json.dumps(server_metadata),
        )

        # When
        filename, result = self._upload_egg(
            metadata=metadata, verify=True, debug=True)

        # Then
        self.assertEqual(result.exit_code, CLIRUNNER_ERRCODE_ON_EXCEPTION)
        self.assertIsInstance(result.exception, ChecksumMismatchError)
        self.assertEqual(len(responses.calls), 1)
        metadata_request, = responses.calls
        self.assertEqual(metadata_request.request.url, metadata_url)

    @responses.activate
    def test_upload_verify_error(self):
        # Given
        metadata = {
            'name': 'nose',
            'version': '1.3.0',
            'build': 1,
            'python': '2.7'
        }
        error = 'an error occurred'

        metadata_url = '{host}{uri}'.format(
            host=self.host,
            uri=URLS_V0.metadata.artefacts.eggs.format(
                organization_name=self.organization,
                repository_name=self.repository,
                platform=self.platform,
                python_tag='cp27',
                name='nose',
                version='1.3.0-1',
            ),
        )
        responses.add(
            responses.GET,
            metadata_url,
            content_type='application/json',
            status=400,
            body=json.dumps({'error': error}),
        )

        # When
        filename, result = self._upload_egg(metadata=metadata, verify=True)

        # Then
        self.assertEqual(result.exit_code, -1)
        self.assertIsInstance(result.exception, SystemExit)
        self.assertEqual(len(responses.calls), 1)
        metadata_request, = responses.calls
        self.assertEqual(metadata_request.request.url, metadata_url)

    @responses.activate
    def test_upload_verify_valid(self):
        # Given
        metadata = {
            'name': 'nose',
            'version': '1.3.0',
            'build': 1,
            'python': '2.7'
        }
        metadata_url = '{host}{uri}'.format(
            host=self.host,
            uri=URLS_V0.metadata.artefacts.eggs.format(
                organization_name=self.organization,
                repository_name=self.repository,
                platform=self.platform,
                python_tag='cp27',
                name='nose',
                version='1.3.0-1',
            ),
        )

        # When
        with self._upload_egg_context(
                metadata=metadata, verify=True) as upload_result:
            server_metadata = {
                'sha256': upload_result.testing_egg.sha256,
            }

            responses.add(
                responses.GET,
                metadata_url,
                content_type='application/json',
                status=200,
                body=json.dumps(server_metadata),
            )
        result = upload_result.result

        # Then
        self.assertEqual(result.exit_code, 0)
        self.assertEqual(len(responses.calls), 1)
        metadata_request, = responses.calls
        self.assertEqual(metadata_request.request.url, metadata_url)


class MetadataResponseGenerator(object):
    """Generate dynamic responses to egg metadata requests

    Mainly the response code to the metadata request
    changes from 404 meaning that the egg is not present
    to 200 meaning that the egg is present.

    Specifically this was created to simulate a delay
    in the availability of the egg.
    """
    # Default dummy data constant for response body
    # Often only the response code is checked
    #   for determining whether the egg exists.
    _DUMMY_METADATA = {
        'filename': 'MKL-10.3-1.egg',
        'name': 'mkl',
        'egg_basename': 'MKL',
        'version': '10.3',
        'build': 1,
        'full_version': '10.3-1',
        'packages': [],
        'md5': 'abc1234',
        'sha256': 'abc1234def456',
        'python_tag': None,
        'python': None,
        'product': None,
        'size': 12345,
        'type': 'egg',
        'enabled': True
    }

    def __init__(self, attempts=1, ok_response_body=None):
        """
        Parameters
        ----------
        attempts: int >= 0
            Number of tries before getting a response of 200.
            0 would give a 200 response on the first request.
            **NOTE: The first request will be made before uploading the egg
            to make sure that it is not already there UNLESS --force is used.
        ok_response_body: str
            The body of the response. Normally it doesn't matter
            and defaults to dummy data above.
        """
        self.metadata_attempts = attempts
        if ok_response_body is None:
            self.ok_response_body = json.dumps(self._DUMMY_METADATA)
        else:
            self.ok_response_body = ok_response_body

        # Tries are tracked per egg indicated by url of request
        self.attempts_by_url = {}

    def reset(self):
        self.attempts_by_url = {}

    def metadata_callback(self, request):
        if request.url in self.attempts_by_url:
            self.attempts_by_url[request.url] += 1
        else:
            self.attempts_by_url[request.url] = 0
        if self.attempts_by_url[request.url] < self.metadata_attempts:
            return (404, {}, '{"error": "not found"}')
        else:
            # Egg is now present for all subsequent checks
            return (200, {}, self.ok_response_body)


class TestBatchUploadEggsMain(MainTestingMixin, unittest.TestCase):

    def setUp(self):
        MainTestingMixin.setUp(self)
        self.host = 'http://brood-dev.invalid'
        self.initial_args = [
            '--api-version', '0',
            '--url', self.host, 'eggs', 'batch-upload']
        self.final_args = [self.organization, self.repository, self.platform]
        self.files = [
            ('nose-1.3.0-1.egg', '2.7'),
            ('numpy-1.8.0-1.egg', '2.7'),
            ('MKL-10.3-1.egg', None),
        ]
        self.filenames = [f[0] for f in self.files]
        self.upload_url = '{host}{uri}'.format(
            host=self.host,
            uri=URLS_V0.data.eggs.upload.format(
                organization_name=self.organization,
                repository_name=self.repository,
                platform=self.platform,
            ),
        )
        self.reindex_url = '{host}{uri}'.format(
            host=self.host,
            uri=URLS_V0.data.eggs.re_index.format(
                organization_name=self.organization,
                repository_name=self.repository,
                platform=self.platform,
            ),
        )
        self.metadata_attempts = 2
        # This is the --index_timeout option for "hatcher batch-upload"
        self.index_timeout = 10
        self.metadata_response = MetadataResponseGenerator(attempts=self.metadata_attempts)

    def _batch_upload_eggs(self, force=False, debug=False, index=True):
        initial_args = self.initial_args
        if force:
            initial_args = initial_args + ['--force']
        if debug:
            initial_args = ['--debug'] + initial_args
        if not index:
            initial_args = initial_args + ['--no-index']
        with self.runner.isolated_filesystem() as tempdir:
            for filename, python in self.files:
                name, version, build = split_egg_name(filename)
                make_testing_egg(
                    tempdir, name=name, version=version, build=build,
                    python=python)
            result = self.runner.invoke(
                main.hatcher,
                args=initial_args + self.final_args + self.filenames,
            )
        return result

    def _metadata_url_from_file(self, filename, python):
        python_to_tag = {
            '2.7': 'cp27',
            None: 'none',
        }
        name, version, build = split_egg_name(filename)
        return '{host}{uri}'.format(
            host=self.host,
            uri=URLS_V0.metadata.artefacts.eggs.format(
                organization_name=self.organization,
                repository_name=self.repository,
                platform=self.platform,
                python_tag=python_to_tag[python],
                name=name,
                version='{0}-{1}'.format(version, build),
            ),
        )

    @responses.activate
    def test_batch_upload_non_existing_file(self):
        # Given
        if utils.IS_CLICK_7:
            r_error = (
                'Error: Invalid value for "[EGGS]...": File '
                '"foo-1.1.0-1.egg" does not exist.')
        else:
            r_error = (
                'Error: Invalid value for "eggs": Path '
                '"foo-1.1.0-1.egg" does not exist.')

        # When
        result = self.runner.invoke(
            main.hatcher,
            args=self.initial_args + self.final_args + ["foo-1.1.0-1.egg"],
        )

        # Then
        self.assertEqual(result.exit_code, 2)
        self.assertRegexpMatches(result.output, re.escape(r_error))

    @responses.activate
    def test_batch_upload_directory_fails(self):
        # Given
        if utils.IS_CLICK_7:
            r_error_template = (
                'Error: Invalid value for "[EGGS]...": File '
                '"{0}" is a directory.')
        else:
            r_error_template = (
                'Error: Invalid value for "eggs": Path "{0}" is a directory.')

        # When
        with self.runner.isolated_filesystem() as tempdir:
            result = self.runner.invoke(
                main.hatcher,
                args=self.initial_args + self.final_args + [tempdir],
            )

        # Then
        self.assertEqual(result.exit_code, 2)
        self.assertRegexpMatches(
            result.output,
            re.escape(r_error_template.format(tempdir)))

    @responses.activate
    def test_batch_upload_defaults_no_existing(self):
        # Given
        metadata_urls = [self._metadata_url_from_file(filename, python)
                         for filename, python in self.files]
        self.metadata_response.reset()
        for url in metadata_urls:
            responses.add_callback(
                responses.GET,
                url,
                self.metadata_response.metadata_callback,
            )

        responses.add(
            responses.POST,
            self.upload_url,
            status=200,
        )

        responses.add(
            responses.POST,
            self.reindex_url,
            status=200,
        )

        expected_tabulate_output = textwrap.dedent("""\
        Batch egg upload  3 eggs to upload
        Server            {url}
        Repository        {organization}/{repository}
        Platform          {platform}
        Time              {datetime}
        """).format(
            url=self.host,
            datetime='2016-02-09 12:29:07 EET (+0200)',
            organization=self.organization,
            repository=self.repository,
            platform=self.platform,
        )
        expected_index_output = textwrap.dedent("""\
        Verified uploaded eggs for indexing after {} of {} attempts.
        Updating the index...
        """).format(self.metadata_attempts, self.index_timeout)

        # When
        with patch.object(
                utils, 'get_localtime') as get_localtime:
            now = datetime(2016, 2, 9, 10, 29, 7, tzinfo=pytz.utc)
            get_localtime.return_value = now.astimezone(
                pytz.timezone('Europe/Helsinki'))
            result = self._batch_upload_eggs(force=False, debug=True)

        # Then
        self.assertEqual(result.exit_code, 0)
        # Two calls for each egg,
        # plus number of metadata attempts for each egg,
        # plus one to update the index
        calls = (2 + self.metadata_attempts) * 3 + 1
        self.assertEqual(len(responses.calls), calls)
        (metadata_request1, upload_request1,
         metadata_request2, upload_request2,
         metadata_request3, upload_request3) = responses.calls[0:6]
        reindex_request = responses.calls[-1]

        # All eggs have their metadata queried
        self.assertNotEqual(metadata_request1.request.url,
                            metadata_request2.request.url)
        self.assertNotEqual(metadata_request1.request.url,
                            metadata_request3.request.url)

        # The upload URL is always the same
        self.assertEqual(upload_request1.request.url,
                         upload_request2.request.url)
        self.assertEqual(upload_request1.request.url,
                         upload_request3.request.url)
        self.assertIn(metadata_request1.request.url, metadata_urls)
        parsed = parse.urlsplit(upload_request1.request.url)
        used_upload_url = parse.urlunsplit(parsed[:3] + ('', ''))
        self.assertEqual(used_upload_url, self.upload_url)

        self.assertEqual(reindex_request.request.url, self.reindex_url)

        # No console output
        # Work around differing number of blank lines in click versions during
        # testing
        try:
            r_tabulate_output, r_index_output = re.split(
                r"\n\n+", result.output)
        except ValueError:
            self.assertEqual(
                result.output.strip(), '\n'.join((
                    expected_tabulate_output.strip(),
                    expected_index_output.strip())))
        else:
            self.assertEqual(
                r_tabulate_output.strip(), expected_tabulate_output.strip())
            self.assertEqual(
                r_index_output.strip(), expected_index_output.strip())

    @responses.activate
    def test_batch_upload_no_index(self):
        # Given
        metadata_urls = [self._metadata_url_from_file(filename, python)
                         for filename, python in self.files]

        def metadata_callback(request):
            return (404, {}, '{"error": "not found"}')

        for url in metadata_urls:
            responses.add_callback(
                responses.GET,
                url,
                metadata_callback,
            )

        responses.add(
            responses.POST,
            self.upload_url,
            status=200,
        )

        expected_output = textwrap.dedent("""\
        Batch egg upload  3 eggs to upload
        Server            {url}
        Repository        {organization}/{repository}
        Platform          {platform}
        Time              {datetime}
        """).format(
            url=self.host,
            datetime='2016-02-09 12:29:07 EET (+0200)',
            organization=self.organization,
            repository=self.repository,
            platform=self.platform,
        )

        # When
        with patch.object(
                utils, 'get_localtime') as get_localtime:
            now = datetime(2016, 2, 9, 10, 29, 7, tzinfo=pytz.utc)
            get_localtime.return_value = now.astimezone(
                pytz.timezone('Europe/Helsinki'))
            result = self._batch_upload_eggs(
                force=False, debug=True, index=False)

        # Then
        self.assertEqual(result.exit_code, 0)
        self.assertEqual(len(responses.calls), 6)
        (metadata_request1, upload_request1, metadata_request2,
         upload_request2, metadata_request3, upload_request3) = responses.calls

        # All eggs have their metadata queried
        self.assertNotEqual(metadata_request1.request.url,
                            metadata_request2.request.url)
        self.assertNotEqual(metadata_request1.request.url,
                            metadata_request3.request.url)

        # The upload URL is always the same
        self.assertEqual(upload_request1.request.url,
                         upload_request2.request.url)
        self.assertEqual(upload_request1.request.url,
                         upload_request3.request.url)
        self.assertIn(metadata_request1.request.url, metadata_urls)
        parsed = parse.urlsplit(upload_request1.request.url)
        used_upload_url = parse.urlunsplit(parsed[:3] + ('', ''))
        self.assertEqual(used_upload_url, self.upload_url)

        # No console output
        self.assertEqual(result.output.strip(), expected_output.strip())

    @responses.activate
    def test_batch_reindex_error(self):
        # Given
        metadata_urls = [
            self._metadata_url_from_file(filename, python)
            for filename, python in self.files]
        self.metadata_response.reset()
        for url in metadata_urls:
            responses.add_callback(
                responses.GET,
                url,
                self.metadata_response.metadata_callback
            )

        responses.add(responses.POST, self.upload_url, status=200)
        responses.add(
            responses.POST,
            self.reindex_url,
            status=400,
            content_type='application/json',
            body=json.dumps({'error': 'failed'})
        )

        expected_tabulate_output = textwrap.dedent("""\
        Batch egg upload  3 eggs to upload
        Server            {url}
        Repository        {organization}/{repository}
        Platform          {platform}
        Time              {datetime}
        """).format(
            url=self.host,
            datetime='2016-07-09 13:29:07 EEST (+0300)',
            organization=self.organization,
            repository=self.repository,
            platform=self.platform,
        )
        expected_index_output = textwrap.dedent("""\
        Verified uploaded eggs for indexing after {} of {} attempts.
        Updating the index...
        """).format(self.metadata_attempts, self.index_timeout)

        # When
        with patch.object(
                utils, 'get_localtime') as get_localtime:
            now = datetime(2016, 7, 9, 10, 29, 7, tzinfo=pytz.utc)
            get_localtime.return_value = now.astimezone(
                pytz.timezone('Europe/Helsinki'))
            result = self._batch_upload_eggs(force=False, debug=True)

        # Then
        self.assertEqual(result.exit_code, CLIRUNNER_ERRCODE_ON_EXCEPTION)
        self.assertIsInstance(result.exception, HTTPError)
        # Two calls for each egg,
        # plus number of metadata attempts for each egg,
        # plus one to update the index
        calls = (2 + self.metadata_attempts) * 3 + 1
        self.assertEqual(len(responses.calls), calls)
        (metadata_request1, upload_request1,
         metadata_request2, upload_request2,
         metadata_request3, upload_request3) = responses.calls[0:6]
        reindex_request = responses.calls[-1]

        # All eggs have their metadata queried
        self.assertNotEqual(metadata_request1.request.url,
                            metadata_request2.request.url)
        self.assertNotEqual(metadata_request1.request.url,
                            metadata_request3.request.url)

        # The upload URL is always the same
        self.assertEqual(upload_request1.request.url,
                         upload_request2.request.url)
        self.assertEqual(upload_request1.request.url,
                         upload_request3.request.url)
        self.assertIn(metadata_request1.request.url, metadata_urls)
        parsed = parse.urlsplit(upload_request1.request.url)
        used_upload_url = parse.urlunsplit(parsed[:3] + ('', ''))
        self.assertEqual(used_upload_url, self.upload_url)

        self.assertEqual(reindex_request.request.url, self.reindex_url)

        # No console output (handled by generic error handler)
        # Work around differing number of blank lines in click versions during
        # testing
        try:
            r_tabulate_output, r_index_output = re.split(
                r"\n\n+", result.output)
        except ValueError:
            self.assertEqual(
                result.output.strip(), '\n'.join((
                    expected_tabulate_output.strip(),
                    expected_index_output.strip())))
        else:
            self.assertEqual(
                r_tabulate_output.strip(), expected_tabulate_output.strip())
            self.assertEqual(
                r_index_output.strip(), expected_index_output.strip())

    @responses.activate
    def test_with_error(self):
        # Given
        metadata_urls = [self._metadata_url_from_file(filename, python)
                         for filename, python in self.files]

        def metadata_callback(request):
            return (404, {}, '{"error": "not found"}')

        for url in metadata_urls:
            responses.add_callback(
                responses.GET,
                url,
                metadata_callback,
            )

        responses.add(
            responses.POST,
            self.upload_url,
            status=400,
            content_type='application/json',
            body=json.dumps({'error': "can't do that!"})
        )

        # When
        result = self._batch_upload_eggs(force=False, debug=True)

        # Then
        self.assertEqual(result.exit_code, CLIRUNNER_ERRCODE_ON_EXCEPTION)
        self.assertIsInstance(result.exception, HTTPError)
        self.assertEqual(len(responses.calls), 2)
        metadata_request, upload_request = responses.calls
        self.assertIn(metadata_request.request.url, metadata_urls)

        self.assertEqual(upload_request.response.status_code, 400)
        parsed = parse.urlsplit(upload_request.request.url)
        used_upload_url = parse.urlunsplit(parsed[:3] + ('', ''))
        self.assertEqual(used_upload_url, self.upload_url)

        # Console output for errors
        regexp = '|'.join(['({0})'.format(re.escape(path)) for path in
                           self.filenames])

        self.assertRegexpMatches(
            result.output.strip(), r'Error uploading {0}$'.format(regexp))

    @responses.activate
    def test_batch_upload_force(self):
        # Given
        metadata_urls = [self._metadata_url_from_file(filename, python)
                         for filename, python in self.files]
        self.metadata_response.reset()
        # Make metadata_attempts one more to match output
        # since there is no check before upload on --force
        metadata_attempts = self.metadata_attempts + 1

        for url in metadata_urls:
            responses.add_callback(
                responses.GET,
                url,
                self.metadata_response.metadata_callback,
            )

        responses.add(
            responses.POST,
            self.upload_url,
            status=200,
        )

        responses.add(
            responses.POST,
            self.reindex_url,
            status=200,
        )

        expected_tabulate_output = textwrap.dedent("""\
        Batch egg upload  3 eggs to upload
        Server            {url}
        Repository        {organization}/{repository}
        Platform          {platform}
        Time              {datetime}
        """).format(
            url=self.host,
            datetime='2016-02-09 12:29:07 EET (+0200)',
            organization=self.organization,
            repository=self.repository,
            platform=self.platform,
        )
        expected_index_output = textwrap.dedent("""\
        Verified uploaded eggs for indexing after {} of {} attempts.
        Updating the index...
        """).format(metadata_attempts, self.index_timeout)

        # When
        with patch.object(
                utils, 'get_localtime') as get_localtime:
            now = datetime(2016, 2, 9, 10, 29, 7, tzinfo=pytz.utc)
            get_localtime.return_value = now.astimezone(
                pytz.timezone('Europe/Helsinki'))
            result = self._batch_upload_eggs(force=True, debug=True)

        # Then
        self.assertEqual(result.exit_code, 0)
        # One call for each egg,
        # plus number of metadata attempts for each egg,
        # plus one to update the index
        calls = (1 + metadata_attempts) * 3 + 1
        self.assertEqual(len(responses.calls), calls)
        (upload_request1, upload_request2, upload_request3) = responses.calls[0:3]
        reindex_request = responses.calls[-1]

        # The upload URL is always the same
        self.assertEqual(upload_request1.request.url,
                         upload_request2.request.url)
        self.assertEqual(upload_request1.request.url,
                         upload_request3.request.url)
        parsed = parse.urlsplit(upload_request1.request.url)
        used_upload_url = parse.urlunsplit(parsed[:3] + ('', ''))
        self.assertEqual(used_upload_url, self.upload_url)

        self.assertEqual(reindex_request.request.url, self.reindex_url)

        # No console output
        # Work around differing number of blank lines in click versions during
        # testing
        try:
            r_tabulate_output, r_index_output = re.split(
                r"\n\n+", result.output)
        except ValueError:
            self.assertEqual(
                result.output.strip(), '\n'.join((
                    expected_tabulate_output.strip(),
                    expected_index_output.strip())))
        else:
            self.assertEqual(
                r_tabulate_output.strip(), expected_tabulate_output.strip())
            self.assertEqual(
                r_index_output.strip(), expected_index_output.strip())

    @responses.activate
    def test_batch_upload_force_error(self):
        # Given
        responses.add(
            responses.POST,
            self.upload_url,
            status=400,
            content_type='application/json',
            body=json.dumps({'error': "can't do that!"})
        )

        # When
        result = self._batch_upload_eggs(force=True, debug=True)

        # Then
        self.assertEqual(result.exit_code, CLIRUNNER_ERRCODE_ON_EXCEPTION)
        self.assertEqual(len(responses.calls), 1)
        upload_request1, = responses.calls

        # The upload URL is always the same
        parsed = parse.urlsplit(upload_request1.request.url)
        used_upload_url = parse.urlunsplit(parsed[:3] + ('', ''))
        self.assertEqual(used_upload_url, self.upload_url)

        # Console output for errors
        regexp = '|'.join(['({0})'.format(re.escape(path)) for path in
                           self.filenames])

        self.assertRegexpMatches(
            result.output.strip(), r'Error uploading {0}$'.format(regexp))


class TestEggsUpdateIndexMain(MainTestingMixin, unittest.TestCase):

    def setUp(self):
        MainTestingMixin.setUp(self)
        self.host = 'http://brood-dev.invalid'
        self.initial_args = [
            '--api-version', '0',
            '--url', self.host, 'eggs', 'update-index']
        self.final_args = [self.organization, self.repository, self.platform]
        self.files = ['nose-1.3.0-1.egg', 'numpy-1.8.0-1.egg']
        self.reindex_url = '{host}{uri}'.format(
            host=self.host,
            uri=URLS_V0.data.eggs.re_index.format(
                organization_name=self.organization,
                repository_name=self.repository,
                platform=self.platform,
            ),
        )

    def _reindex_eggs(self, debug=False):
        initial_args = self.initial_args
        if debug:
            initial_args = ['--debug'] + initial_args
        with self.runner.isolated_filesystem() as tempdir:
            for filename in self.files:
                name, version, build = split_egg_name(filename)
                make_testing_egg(
                    tempdir, name=name, version=version, build=build)
            result = self.runner.invoke(
                main.hatcher,
                args=initial_args + self.final_args + self.files,
            )
        return result

    @responses.activate
    def test_update_index(self):
        # Given
        responses.add(
            responses.POST,
            self.reindex_url,
            status=200,
        )

        # When
        result = self._reindex_eggs(debug=False)

        # Then
        self.assertEqual(result.exit_code, 0)
        self.assertEqual(len(responses.calls), 1)
        reindex_request, = responses.calls
        self.assertEqual(reindex_request.request.url, self.reindex_url)

        # No console output
        self.assertEqual(result.output, '')

    @responses.activate
    def test_update_index_debug(self):
        # Given
        responses.add(
            responses.POST,
            self.reindex_url,
            status=200,
        )

        # When
        result = self._reindex_eggs(debug=True)

        # Then
        self.assertEqual(result.exit_code, 0)
        self.assertEqual(len(responses.calls), 1)
        reindex_request, = responses.calls
        self.assertEqual(reindex_request.request.url, self.reindex_url)

        # No console output
        self.assertEqual(result.output, '')

    @responses.activate
    def test_update_index_error_debug(self):
        # Given
        responses.add(
            responses.POST,
            self.reindex_url,
            status=400,
            content_type='application/json',
            body='{"error": "Oops!"}'
        )

        # When
        result = self._reindex_eggs(debug=True)

        # Then
        self.assertEqual(result.exit_code, CLIRUNNER_ERRCODE_ON_EXCEPTION)
        self.assertIsInstance(result.exception, HTTPError)
        self.assertEqual(len(responses.calls), 1)
        reindex_request, = responses.calls
        self.assertEqual(reindex_request.request.url, self.reindex_url)

        # No console output
        self.assertEqual(result.output, '')

    @responses.activate
    def test_update_index_error_no_debug(self):
        # Given

        responses.add(
            responses.POST,
            self.reindex_url,
            status=400,
            content_type='application/json',
            body='{"error": "Oops!"}'
        )

        # When
        result = self._reindex_eggs(debug=False)

        # Then
        self.assertEqual(result.exit_code, -1)
        self.assertIsInstance(result.exception, SystemExit)
        self.assertEqual(len(responses.calls), 1)
        reindex_request, = responses.calls
        self.assertEqual(reindex_request.request.url, self.reindex_url)

        # No console output
        self.assertEqual(result.output.strip(), 'Oops!')


class TestDownloadEggMain(MainTestingMixin, unittest.TestCase):

    def setUp(self):
        MainTestingMixin.setUp(self)
        self.initial_args = [
            '--api-version', '0',
            '--url', 'brood-dev.invalid', 'eggs', 'download']
        self.final_args = [
            self.organization, self.repository, self.platform]

    @patch_repository
    def test_download(self, Repository):
        # Given
        args = ['nose', '1.3.0-1', 'cp27', 'destination']
        repository, platform_repo = self._mock_repository_class(Repository)
        iter_download_egg = platform_repo.iter_download_egg
        iter_download_egg.return_value = 0, []

        # When
        result = self.runner.invoke(
            main.hatcher,
            args=self.initial_args + self.final_args + args,
        )

        # Then
        self.assertRepositoryConstructedCorrectly(Repository)
        iter_download_egg.assert_called_once_with(*args)
        self.assertEqual(result.exit_code, 0)

    @patch_repository
    def test_download_checksum_mismatch(self, Repository):
        # Given
        error_text = 'Checksum mismatch on download'

        def iter_download():
            yield 0
            raise ChecksumMismatchError(error_text)

        args = ['nose', '1.3.0-1', 'cp27', 'destination']
        repository, platform_repo = self._mock_repository_class(Repository)
        iter_download_egg = platform_repo.iter_download_egg
        iter_download_egg.return_value = 0, iter_download()

        # When
        result = self.runner.invoke(
            main.hatcher,
            args=self.initial_args + self.final_args + args,
        )

        # Then
        self.assertRepositoryConstructedCorrectly(Repository)
        self.assertEqual(result.exit_code, -1)
        self.assertEqual(result.output.strip(), error_text)
        self.assertIsInstance(result.exception, SystemExit)
        iter_download_egg.assert_called_once_with(*args)

    @patch_repository
    def test_download_checksum_mismatch_debug(self, Repository):
        # Given
        error_text = 'Checksum mismatch on download'

        def iter_download():
            yield 0
            raise ChecksumMismatchError(error_text)

        args = ['nose', '1.3.0-1', 'cp27', 'destination']
        repository, platform_repo = self._mock_repository_class(Repository)
        iter_download_egg = platform_repo.iter_download_egg
        iter_download_egg.return_value = 0, iter_download()

        # When
        result = self.runner.invoke(
            main.hatcher,
            args=['--debug'] + self.initial_args + self.final_args + args,
        )

        # Then
        self.assertRepositoryConstructedCorrectly(Repository)
        self.assertEqual(result.exit_code, CLIRUNNER_ERRCODE_ON_EXCEPTION)
        self.assertEqual(result.output.strip(), '')
        self.assertIsInstance(result.exception, ChecksumMismatchError)
        iter_download_egg.assert_called_once_with(*args)


class TestEggMetadataMain(MainTestingMixin, unittest.TestCase):

    def setUp(self):
        MainTestingMixin.setUp(self)
        self.host = 'http://brood-dev.invalid'
        self.initial_args = [
            '--api-version', '0',
            '--url', self.host, '--debug', 'eggs', 'metadata']
        self.python_tag = 'none'
        self.final_args = [
            self.organization, self.repository, self.platform, self.python_tag]

    @responses.activate
    def test_egg_metadata(self):
        # Given
        expected = {
            'filename': 'MKL-10.3-1.egg',
            'name': 'mkl',
            'egg_basename': 'MKL',
            'version': '10.3',
            'build': 1,
            'full_version': '10.3-1',
            'packages': [],
            'md5': 'abc1234',
            'sha256': 'abc1234def456',
            'python_tag': None,
            'python': None,
            'product': None,
            'size': 12345,
            'type': 'egg',
            'enabled': True
        }

        expected_url = '{host}{url}'.format(
            host=self.host,
            url=URLS_V0.metadata.artefacts.eggs.format(
                organization_name=self.organization,
                repository_name=self.repository,
                platform=self.platform,
                python_tag=self.python_tag,
                name='mkl',
                version='10.3-1',
            ),
        )

        def callback(request):
            return (200, {}, json.dumps(expected))

        responses.add_callback(
            responses.GET,
            expected_url,
            callback=callback,
        )

        # When
        result = self.runner.invoke(
            main.hatcher,
            args=self.initial_args + self.final_args + ['mkl', '10.3-1'],
            catch_exceptions=False
        )

        # Then
        self.assertEqual(json.loads(result.output), expected)
        self.assertEqual(result.exit_code, 0)


class TestListEggsMain(MainTestingMixin, unittest.TestCase):

    @patch_repository
    def test_list_eggs(self, Repository):
        # Given
        python_tag = 'cp27'
        egg_names = [
            {'name': 'nose-1.3.0-1.egg', 'python_tag': 'py2'},
            {'name': 'nose-1.30.0-1.egg', 'python_tag': 'py2'},
            {'name': 'nose-1.4.0-1.egg', 'python_tag': 'py2'},
            {'name': 'MKL-10.3-3.egg', 'python_tag': 'none'},
            {'name': 'numpy-1.8.0-1.egg', 'python_tag': 'cp27'},
        ]
        sorted_egg_names = [
            {'name': 'MKL-10.3-3.egg', 'python_tag': 'none'},
            {'name': 'nose-1.3.0-1.egg', 'python_tag': 'py2'},
            {'name': 'nose-1.4.0-1.egg', 'python_tag': 'py2'},
            {'name': 'nose-1.30.0-1.egg', 'python_tag': 'py2'},
            {'name': 'numpy-1.8.0-1.egg', 'python_tag': 'cp27'},
        ]
        sorted_metadata = [(item['name'], item['python_tag'])
                           for item in sorted_egg_names]
        headers = ['Egg Name', 'Python Tag']
        expected = tabulate(sorted_metadata, headers=headers) + '\n'

        repository, platform_repo = self._mock_repository_class(Repository)
        list_eggs = platform_repo.list_eggs
        list_eggs.return_value = egg_names

        args = ['--url', 'brood-dev.invalid', 'eggs', 'list',
                self.organization, self.repository, self.platform, python_tag]

        # When
        result = self.runner.invoke(main.hatcher, args=args)

        # Then
        self.assertEqual(result.output, expected)
        self.assertEqual(result.exit_code, 0)
        self.assertRepositoryConstructedCorrectly(Repository)
        list_eggs.assert_called_once_with(python_tag)

    @patch_repository
    def test_list_egg_help(self, Repository):
        # Given
        args = ['eggs', 'list', '--help']

        # When
        result = self.runner.invoke(main.hatcher, args=args)

        # Then
        self.assertIn('Usage: hatcher eggs list', result.output)
        self.assertNotIn('Unexpected error', result.output)
        self.assertEqual(result.exit_code, 0)


class TestDeleteEggsMain(MainTestingMixin, unittest.TestCase):

    def setUp(self):
        MainTestingMixin.setUp(self)

        self.python_tag = 'cp27'
        self.egg_name = 'foo'
        self.egg_version = '1.0.0-1'

        self.initial_args = [
            '--api-version', '0',
            '--url', 'brood-dev.invalid', 'eggs', 'delete']
        self.final_args = [self.organization, self.repository, self.platform,
                           self.python_tag, self.egg_name, self.egg_version]

    @patch_repository
    def test_delete_egg_respond_no(self, Repository):
        # Given
        repository, platform_repo = self._mock_repository_class(Repository)
        delete_egg = platform_repo.delete_egg

        r_output = ("{0}-{1} ({2}) will be deleted from {3}. "
                    "Proceed? [y/N]: N\n")

        # When
        args = self.initial_args + self.final_args
        result = self.runner.invoke(main.hatcher, args=args, input='N')

        # Then
        self.assertEqual(result.exit_code, 0)
        self.assertMultiLineEqual(
            result.output,
            r_output.format(
                self.egg_name, self.egg_version, self.python_tag, repository)
        )
        delete_egg.assert_not_called()

    @patch_repository
    def test_delete_egg_respond_yes(self, Repository):
        # Given
        repository, platform_repo = self._mock_repository_class(Repository)
        delete_egg = platform_repo.delete_egg

        r_output = ("{0}-{1} ({2}) will be deleted from {3}. "
                    "Proceed? [y/N]: Y\n")

        # When
        args = self.initial_args + self.final_args
        result = self.runner.invoke(main.hatcher, args=args, input='Y')

        # Then
        self.assertEqual(result.exit_code, 0)
        self.assertMultiLineEqual(
            result.output,
            r_output.format(
                self.egg_name, self.egg_version, self.python_tag, repository)
        )
        delete_egg.assert_called_once_with(
            self.python_tag, self.egg_name, self.egg_version)

    @patch_repository
    def test_delete_egg_assume_yes(self, Repository):
        # Given
        repository, platform_repo = self._mock_repository_class(Repository)
        delete_egg = platform_repo.delete_egg

        # When
        args = self.initial_args + ['-y'] + self.final_args
        result = self.runner.invoke(main.hatcher, args=args)

        # Then
        self.assertEqual(result.exit_code, 0)
        delete_egg.assert_called_once_with(
            self.python_tag, self.egg_name, self.egg_version)
