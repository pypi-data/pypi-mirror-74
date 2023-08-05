# coding: utf-8

"""
    Carbon DLS API

    Welcome to the Carbon DLS API docs!  You can find all relevant documentation here: https://github.com/carbon3d/carbon3d-api   # noqa: E501

    The version of the OpenAPI document: 0.0.8
    Contact: api-list@carbon3d.com
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import carbon3d
from carbon3d.api.builds_api import BuildsApi  # noqa: E501
from carbon3d.rest import ApiException


class TestBuildsApi(unittest.TestCase):
    """BuildsApi unit test stubs"""

    def setUp(self):
        self.api = carbon3d.api.builds_api.BuildsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_build(self):
        """Test case for get_build

        Fetch a build  # noqa: E501
        """
        pass

    def test_get_builds(self):
        """Test case for get_builds

        Fetch builds  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
