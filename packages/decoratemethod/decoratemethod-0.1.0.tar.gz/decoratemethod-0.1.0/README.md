# decoratemethod-python

Let function decorator decorate the bound method of per instance.

## Examples

### lru_cache

To make per instance has they own lru cache:

``` py
from functools import lru_cache
from decoratemethod import decorate

class Foo:
    @decorate(lru_cache)
    def decorated_method(self, x):
        ...
```
