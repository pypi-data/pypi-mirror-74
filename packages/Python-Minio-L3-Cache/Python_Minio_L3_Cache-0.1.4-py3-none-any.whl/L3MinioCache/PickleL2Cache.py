import pickle
from pathlib import Path
import os
from typing import IO

from L3MinioCache.CacheInterface import L2Cache


class PickleL2Cache(L2Cache):
    def __init__(self, storage_path: str, extension: str = ".pickle"):
        self.storage_path = Path(storage_path)
        self.storage_path.parent.mkdir(parents=True, exist_ok=True)
        self.extension = extension

    def get_path(self, name: str, abs_path: bool = True):
        ret = self.storage_path / str(name + self.extension)
        if abs_path: ret = os.path.abspath(ret)
        return ret

    def exists(self, name: str):
        return os.path.isfile(self.get_path(name))

    def load(self, name: str):
        full_path = self.get_path(name)
        if not os.path.isfile(full_path):
            return None
        with open(full_path, 'rb') as f:
            ret = pickle.load(f)
        return ret

    def load_b(self, data: IO[bytes]):
        return pickle.load(data)

    def dump(self, name: str, data):
        full_path = self.get_path(name)
        with open(full_path, 'wb') as f:
            pickle.dump(data, f)
        return full_path
