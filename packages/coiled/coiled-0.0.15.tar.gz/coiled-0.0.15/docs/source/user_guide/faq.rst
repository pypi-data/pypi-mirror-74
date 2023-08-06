===
FAQ
===


- :ref:`why-should-packages-match`
- :ref:`version-mismatch-warning`


.. _why-should-packages-match:

Why should my local and remote libraries match?
-----------------------------------------------

When performing distributed computations Dask will serialize data, functions, and other
Python objects needed for the computation in order to send them between your local Python
process (e.g. your laptop) and the scheduler and workers in your Dask cluster
(e.g. running on AWS). Mismatches in library versions between your local Python process and
cluster worker processes can disrupt this serialization / deserialization process in a variety
of ways. For example, widely used serialization libraries like
`Cloudpickle <https://github.com/cloudpipe/cloudpickle>`_ aren’t guaranteed to work across
different versions of Python, so in some cases you may run into errors when using different
Python versions on your laptop and the workers in your cluster.

Because of this it’s recommended that library versions match on both your local machine
and on the remote workers in your cluster. Coiled allows you to seamlessly synchronize your local
and remote software environments using the ``coiled`` command line interface.
See the :ref:`managing-software-environments` section for more details.


.. _version-mismatch-warning:

Why do I see a version mismatch warning?
----------------------------------------

Dask will emit a warning when it finds multiple versions of the same package on a cluster.
When using Coiled this most often means there's a version mismatch between a package in
your local environment and the remote cluster environment. For example, you might have NumPy 1.18.2
installed in your local Python environment on your laptop, while the remote Dask cluster on AWS
has NumPy 1.18.4 installed.

Ensuring package versions match is something that we're working on. In the meantime you might
want to install the following packages locally:

.. code-block::

    conda install --yes \
        -c conda-forge \
        python==3.8 \
        python-blosc \
        cytoolz \
        dask==2.16.0 \
        lz4 \
        nomkl \
        numpy==1.18.1 \
        pandas==1.0.1
