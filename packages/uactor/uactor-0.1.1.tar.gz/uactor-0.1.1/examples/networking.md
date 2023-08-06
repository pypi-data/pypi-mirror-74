### Networking

Actors will default to the most efficient method of inter-process
communication available.

But in some cases, you may want to distribute workloads between different
machines on a same network over TCP/IP. This can by done by defining
the appropriate addresses on your actors.

Keep in mind that the same actors classes must be available, at the same
modules, in all the involved parties.

#### Connection

We can declare our network actor as usual, but customizing the options
forwarded to `ActorManager` with a TCP address (in the example below,
`0.0.0.0` means listening to all addresses, while `0` means choosing a random
port), we also need to specify an authtoken (the authentication secret),
initialize the actor (listening to incoming connections), and print at
which port is the actor listening at.

We'll name this module `network_actor.py` to be used later.

```python
import os
import time
import uactor

class NetworkActor(uactor.Actor):

    # Actor manager options to listen over TCP on a random port
    _options_ = {'address': ('0.0.0.0', 0), 'authkey': b'SECRET'}

    def getpid(self):
        return os.getpid()

if __name__ == '__main__':
    with NetworkActor() as actor:
        host, port = actor.connection_address
        print(f'Actor process {actor.getpid()} at {host}:{port}')
        # Actor process 140262 at 0.0.0.0:37255

        while True:  # keep the owner proxy alive
            time.sleep(10)
```

We can now connect, remotely, to the same actor process with the
`uactor.Actor.connect` method with the correct `authkey`, keep
in mind both proxy address hostname and port to reach its actor process
can vary at different network locations.

This is a remote connection example (importing the actor class from above):

```python
from network_actor import NetworkActor

address = 'localhost', 37255
with NetworkActor.connect(address, b'SECRET') as actor:
    host, port = actor.connection_address
    print(f'Actor process {actor.getpid()} at {host}:{port}')
    # Actor process 140262 at localhost:37255
```

<a name="forwarded-proxies"></a>
#### Forwarded proxies

One neat feature of uActor is proxy forwarding, that is, being able
to pass proxies as arguments or return them, to and from actors.

But when forwarding proxies from actors with different secrets, complexity
adds up pretty quickly.

If a proxy returns a foreign proxy from an actor we aren't connected to, an
`AuthkeyError` will be raised because our process does not know its
authkey.

```python
import uactor

class MyActor(uactor.Actor):
    _exposed_ = ('my_other_actor',)

    def __init__(self):
        self.my_other_actor = MyOtherActor()

class MyOtherActor(uactor.Actor):
    _options_ = {'address': ('0.0.0.0', 7000), 'authkey': b'OtherSecret'}

with MyActor() as actor:
    my_other_actor = actor.my_other_actor
    # AuthKeyError
```

We need to connect to actors before being able to take proxies
pointing to them, while at the same time we probably need to translate
those proxies addresses to be reachable from our location.

```python
with MyActor() as actor:
    address = 'localhost', 7000
    capture = [('0.0.0.0', 7000)]
    with MyOtherActor.connect(address, b'OtherSecret', capture=capture):
        my_other_actor = actor.my_other_actor
```

Or, alternatively, we can wait until we get an exception to perform
the connection.

```python
with MyActor() as actor:
    try:
        my_other_actor = actor.my_other_actor
    except uactor.AuthKeyError as e:
        address = 'localhost', 7000
        capture = [('0.0.0.0', 7000)]
        with MyOtherActor.connect(address, b'OtherSecret', capture=capture):
            my_other_actor = actor.my_other_actor
```

Both approaches have their pros and cons, is opt to the developer to
choose wisely between them, based on the side-effects on his implementation.

#### Server mainloop with remote shutdown

Since the actor process have to be kept alive by its parent process,
we can implement some simple logic to keep it around until needed,
while allowing remote shutdowns.

We'll name this module `network_actor.py` to be used later.

```python
import threading
import uactor

class NetworkActor(uactor.Actor):

    # Actor manager options to listen over TCP on a random port
    _options_ = {'address': ('0.0.0.0', 6000), 'authkey': b'SECRET'}

    def __init__(self):
        self.finished = threading.Event()

    def shutdown(self):
        self.finished.set()

    def wait(self, timeout=-1):
        return self.finished,wait(timeout)

if __name__ == '__main__':
    with NetworkActor() as actor:
        while not actor.wait(timeout=10):  # avoid socket timeouts
            pass
```

This way, a remote proxy will be able to end the mainloop by calling
shutdown and end the owner process mainloop, effectively finishing
the process. We'll import the actor class from the previous example.

```python
from network_actor import NetworkActor

address = 'localhost', 6000
external = NetworkActor.connect(address, b'SECRET')
external.shutdown()
```

#### Autodiscovery

To enable dynamic actor discovery, we might keep an central actor listening
to an specific port, acting as an central registry for other actors.

This way, we can start as many actors as we like, at any time.

We'll name this module `network_actor_registry.py` to be used later.

```python
import itertools
import os
import time
import uactor

class Registry(uactor.Actor):

    _options_ = {'address': ('0.0.0.0', 5000), 'authkey': b'SECRET'}

    def __init__(self):
        self.addresses = frozenset()
        self.iterator = iter(())

    def register(self, *addresses):
        addresses = self.addresses.union(addresses)
        self.iterator, self.addresses = itertools.cycle(addresses), addresses

    def pick(self):
        return next(self.iterator, None)

class NetworkActor(uactor.Actor):

    # Actor manager options to listen over TCP on a random port
    _options_ = {'address': ('0.0.0.0', 0), 'authkey': b'SECRET'}

    def getpid(self):
        return os.getpid()

if __name__ == '__main__':
    with Registry() as registry:
        actors = [NetworkActor() for actor in range(10)]
        addresses = [actor.connection_address for actor in actors]
        registry.register(*addresses)

        print(f'Registry listening at port {registry.connection_address[1]}')
        # Registry serving at port 5000

        print(f'Actors listening at ports {[port for _, port in addresses]}')
        # Actors listening at ports [36061, 35245, ..., 33701, 41653]

        while True:  # keep registry and actors alive
            time.sleep(10)
```

Using registry also allow us to register new actors dynamically.

```python
import time

from network_actor_registry import Registry, NetworkActor

address = 'localhost', 5000
with Registry.connect(address) as registry:
    actors = [NetworkActor() for actor in range(10)]
    addresses = [actor.connection_address for actor in actors]
    registry.register(*addresses)

    print(f'Actors listening at ports {[port for _, port in addresses]}')
    # Actors listening at ports [36061, 35245, ..., 33701, 41653]

    while True:  # keep actors alive
        time.sleep(10)
```

And we can access those actors by retrieving their addresses from
the registry (taking care of handling local addresses, see
[forwarded proxies](#forwarded-proxies)).

```python
from network_actor_registry import Registry, NetworkActor

address = 'localhost', 5000
with Registry.connect(address, b'SECRET') as registry:
    for i in range(10):
        _, port = registry.pick()
        address = 'localhost', port
        with NetworkActor.connect(address, b'SECRET') as actor:
            print(f'Actor at port {port} has pid {actor.getpid()}')
```
