import pytest
import boto3
from moto import mock_s3
from botocore.exceptions import ClientError

from croissant.utils import nested_get_item, s3_get_object


@pytest.mark.parametrize(
    "d, keys, expected",
    [
        ({"a": {1: {"c": "a"}}}, ["a", 1], {"c": "a"},),
        ({"a": {1: {"c": "a"}}}, ["a", 1, "c"], "a",),
        ({"a": "b"}, ["a"], "b",),
        ({"a": "b"}, "a", "b",),
    ]
)
def test_nested_get_item(d, keys, expected):
    assert expected == nested_get_item(d, keys)


@pytest.mark.parametrize(
    "d, keys",
    [
        ({"a": {1: {"c": "a"}}}, ["b", 2],),
        ({"a": {1: {"c": "a"}}}, ["a", 1, "s"],),
        ({"a": "b"}, ["s"],),
        ({"a": "b"}, "s",),
        ({}, "a"),
    ]
)
def test_nested_get_item_fails_if_missing_key(d, keys):
    with pytest.raises(KeyError):
        nested_get_item(d, keys)


@pytest.mark.parametrize(
    "d, keys",
    [
        ({"a": 1}, [],),
        ({}, [],),
    ]
)
def test_nested_get_item_fails_with_empty_list(d, keys):
    with pytest.raises(ValueError):
        nested_get_item(d, keys)


@mock_s3
def test_s3_get_object():
    # Set up the fake bucket and object
    s3 = boto3.client("s3")
    s3.create_bucket(Bucket="mybucket")
    body = b'{"a": 1}\n{"b": 2}'
    s3.put_object(Bucket="mybucket", Key="my/file.json",
                  Body=body)
    # Run the test
    response = s3_get_object("s3://mybucket/my/file.json")
    assert body == response["Body"].read()


@mock_s3
def test_s3_fails_not_exist():
    # Set up the fake bucket and object
    s3 = boto3.client("s3")
    s3.create_bucket(Bucket="mybucket")
    body = b'{"a": 1}\n{"b": 2}'
    s3.put_object(Bucket="mybucket", Key="my/file.json",
                  Body=body)
    # Run the test
    with pytest.raises(ClientError) as e:
        s3_get_object("s3://mybucket/my/nonexistentfile.json")
        assert e.response["Error"]["Code"] == "NoSuchKey"
