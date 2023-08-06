import os
import unittest
import logging

import pytest
from arango import ArangoClient

from arango_orm.database import Database

from .utils import lazy_property

log = logging.getLogger(__name__)


@pytest.fixture(scope="session", autouse=True)
def setup_database_test(request):
    username = os.environ.get('ARANGO_USERNAME', "test")
    password = os.environ.get('ARANGO_PASSWORD', "test")
    arango_ip = os.environ.get('ARANGO_IP', "http://arangodb:8529")
    database_name = os.environ.get('ARANGO_DATABASE', "test")

    sys_db = ArangoClient(hosts=arango_ip).db('_system', username=username, password=password)
    sys_db.create_database(database_name)
    yield


class TestBase(unittest.TestCase):
    "Base class for test cases (unit tests)"

    client = None

    @classmethod
    def get_client(cls):
        if cls.client is None:
            arango_ip = os.environ.get('ARANGO_IP', "http://127.0.0.1:8529")
            cls.client = ArangoClient(hosts=arango_ip)

        return cls.client

    @classmethod
    def get_db(cls):
        username = os.environ.get('ARANGO_USERNAME', "test")
        password = os.environ.get('ARANGO_PASSWORD', "test")
        database_name = os.environ.get('ARANGO_DATABASE', "test")
        return cls.get_client().db(database_name, username=username, password=password)

    @classmethod
    def _get_db_obj(cls):

        test_db = cls.get_db()
        db = Database(test_db)

        return db

    @lazy_property
    def db(self):
        return TestBase._get_db_obj()

    def assert_all_in(self, keys, collection, exp_to_raise=AssertionError):
        "Assert that all given keys are present in the given collection, dict, list or tuple"

        for key in keys:
            if key not in collection:
                raise exp_to_raise

        return True

    def assert_any_in(self, keys, collection, exp_to_raise=AssertionError):
        "Assert that any of the given keys is present in the given collection, dict, list or tuple"

        for key in keys:
            if key in collection:
                return True

        raise exp_to_raise

    def assert_none_in(self, keys, collection, exp_to_raise=AssertionError):
        "Assert that none of the given keys is present in the given collection, dict, list or tuple"

        for key in keys:
            if key in collection:
                raise exp_to_raise

        return True

    def assert_has_same_items(self, left, right, exp_to_raise=AssertionError):
        if not set(left) == set(right):
            raise exp_to_raise
        return True
