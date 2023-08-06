"""Module containing the main base classes"""
from typing import Optional, Union, Any, Dict, List

import redis
from pydantic import BaseModel

from pydantic_redis.config import RedisConfig
from pydantic_redis.utils import bytes_to_string


class _AbstractStore(BaseModel):
    """
    An abstract class of a store
    """
    name: str
    redis_config: RedisConfig
    redis_store: Optional[redis.Redis] = None
    life_span_in_seconds: Optional[int] = None

    class Config:
        arbitrary_types_allowed = True
        orm_mode = True


class _AbstractModel(BaseModel):
    """
    An abstract class to help with typings for Model class
    """
    _store: _AbstractStore
    _primary_key_field: str

    @staticmethod
    def serialize_partially(data: Optional[Dict[str, Any]]):
        """Converts non primitive data types into str"""
        return {key: (value if isinstance(value, (str, float, int)) and not isinstance(value, (bool,)) else str(value))
                for key, value in data.items()}

    @staticmethod
    def deserialize_partially(data: Optional[Dict[bytes, Any]]):
        """Converts non primitive data types into str"""
        return {bytes_to_string(key): (bytes_to_string(value) if isinstance(value, (bytes,)) else value)
                for key, value in data.items()}

    @classmethod
    def get_primary_key_field(cls):
        """Gets the protected _primary_key_field"""
        return cls._primary_key_field

    @classmethod
    def insert(cls, data: Union[List[Any], Any]):
        raise NotImplementedError("insert should be implemented")

    @classmethod
    def update(cls, primary_key_value: Union[Any, Dict[str, Any]], data: Dict[str, Any]):
        raise NotImplementedError("update should be implemented")

    @classmethod
    def delete(cls, primary_key_value: Union[Any, Dict[str, Any]]):
        raise NotImplementedError("delete should be implemented")

    @classmethod
    def select(cls, columns: Optional[List[str]] = None):
        """Should later allow AND, OR"""
        raise NotImplementedError("select should be implemented")

    class Config:
        arbitrary_types_allowed = True
