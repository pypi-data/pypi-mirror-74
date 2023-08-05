# Python-Minio-L3-Cache
Simple object-store caching helper library for python3. It uses Pickle for L2 cache and Minio as L3 cache.

Installation:
```bash
pip install Python-Minio-L3-Cache
```

Simple Usage:
``` python
from L3MinioCache import L2L3Cache
from minio import Minio

a = 'some variable'

client = Minio("url.com", "key", "secret")
cache = L2L3Cache('./tmp', client, 'test')
cache.dump('test', a)

new_a = cache.load('test')
```

Usage with callback wrapper will execute your method if cache misses in picke (l2) and minio (l3), and saves the file with the provided name and a hashed md5 string of the arguments and the source code of the method. Note that if methods called by the callback method are changed, this hash will not, therefore you should delete the old file in this case. Use relevant naming to avoid losing track of your files.

``` python
from L3MinioCache import L2L3Cache, L2L3HashedCache
from minio import Minio

a = 'some variable'

client = Minio("url.com", "key", "secret")
cache = L2L3Cache('./tmp', client, 'test')

def testfunc(a, b):
    print('executed')
    return a+b

cache_hashed = L2L3HashedCache(cache)
result = cache_hashed.execute('test2', testfunc, 1, 2)
```

The pickle (l2) cache file are appended a ".pickle" extension, therefore it is recommended you to add "*.pickle" to your .gitignore