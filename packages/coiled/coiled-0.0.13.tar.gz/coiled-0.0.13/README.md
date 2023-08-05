Coiled Cloud Python API
=======================

See [coiled.io](https://coiled.io)

Example
-------

```python
import coiled

# Create a remote Dask cluster managed by Coiled
cluster = coiled.Cluster(configuration="coiled/default")

# Connect a Dask Client to the cluster
from dask.distributed import Client

client = Client(cluster)

# Start performing computations!
import dask.datasets

df = dask.datasets.timeseries()
df[["x", "y"]].resample("1h").mean().compute()
```
