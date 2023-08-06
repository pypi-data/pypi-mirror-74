# Sticky processes

When handling multi-process concurrency, your operative system
(or more specifically, its process scheduler) will effectively distribute
the workload between processes at its best.

But, when looking for maximum performance, we may want to prevent two actors
to run in the same CPU core, otherwise they have to share processing time.

Thanks to the awesome [psutil][psutil] library we can do this simply by
selecting an specific CPU core per process.

```python
import psutil
import uactor

class StickyActor(uactor.Actor):
    def __init__(self, core):
        # Stick our current actor process to a core
        psutil.Process().cpu_affinity([core])

# Initialize one actor per CPU core
actors = [
    StickyActor(core)
    for core in range(psutil.cpu_count())
    ]
```

This pattern fits very well into [actor pools](./pool.md) for better
distributing workloads.

[psutil]: https://github.com/giampaolo/psutil
