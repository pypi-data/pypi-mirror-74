# coordinator

A simple library that manages hooks in Python applications.

## Example

Simplest example

```py
from gevent import monkey; monkey.patch_all()
from coordinator import Coordinator

coord = Coordinator()

@coord.register_task("my_hook")
def my_task(context):
    print(context["message"])

coord.fire_hook("my_hook", {
    "message": "Hello, World!"
})

```

Full documentation is WIP.
