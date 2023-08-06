"""Miscellaneous utility functions that don't quite belong elsewhere."""
from typing import Any
from functools import reduce
import operator
import boto3
from urllib.parse import urlparse


def nested_get_item(obj: dict, key_list: list) -> Any:
    """
    Get item from a list of keys, which define nested paths.

    Example:
    ```
    d = {"a": {"b": {"c": 1}}}
    keys = ["a", "b", "c"]
    nested_get_item(d, keys)    # 1
    ```
    Parameters
    ==========
    obj: dict
        The dictionary to retrieve items by key
    key_list: list
        List of keys, in order, to traverse through the nested dict
        and return a value.
    Raises
    ======
    KeyError if any key from `key_list` is not present in `obj`
    """
    # Handle single key just in case, since a string is also an iterator
    if isinstance(key_list, str):
        key_list = [key_list]
    else:
        key_list = list(key_list)
    if len(key_list) == 0:
        raise ValueError("Empty list is not a valid key.")
    return reduce(operator.getitem, key_list, obj)


def s3_get_object(uri: str) -> dict:
    """
    Utility wrapper for calling get_object from the boto3 s3 client,
    using an s3 URI directly (rather than having to parse the bucket
    and key)
    Parameters
    ==========
    uri: str
        Location of the s3 file object
    Returns
    =======
    Dict containing response from boto3 s3 client
    """
    s3 = boto3.client("s3")
    parsed_s3 = urlparse(uri)
    bucket = parsed_s3.netloc
    file_key = parsed_s3.path[1:]
    response = s3.get_object(Bucket=bucket, Key=file_key)
    return response
