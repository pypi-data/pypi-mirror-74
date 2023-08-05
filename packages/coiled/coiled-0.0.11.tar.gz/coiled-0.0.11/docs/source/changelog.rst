=============
Release Notes
=============

0.0.11
======

Released July 9, 2020.

-  Don't shut down clustesr if we didn't create them
-  Slim down the outputs of list_software_environments and list_cluster_configurations

0.0.10
======

Released July 8, 2020.

-  Use websockets to create clusters due to long-running requests
-  Avoid excess endlines when printing out status in the CLI
-  Allow calling coiled env create repeatedly on the same environment

0.0.9
=====

Released July 7, 2020.

-  Change default to coiled/default
-  Add ``coiled login`` CLI command
-  Use account namespaces everywhere, remove ``account=`` keyword
-  Allow the use of public environments and configurations

0.0.8
=====

Released on July 1, 2020.

- Update to use new API endpoint scheme
- Adds ``conda env create`` command line interface


0.0.7
=====

Released on June 29, 2020.

- Adds ``Cloud.create_software_environment``, ``Cloud.delete_software_environment``, and ``Cloud.list_software_environments`` methods
- Adds ``Cloud.create_cluster_configuration``, ``Cloud.delete_cluster_configuration``, and ``Cloud.list_cluster_configurations`` methods
- Update ``Cloud`` object to use a token rather than a password
- Changed name of package from ``coiled_cloud`` to ``coiled``


0.0.6
=====

Released on May 26, 2020.

- Includes ``requirements.txt`` in ``MANIFEST.in``


0.0.5
=====

Released on May 26, 2020.

- Includes versioneer in ``MANIFEST.in``


0.0.4
=====

Released on May 26, 2020.

- Adds ``LICENSE`` to project


0.0.3
=====

Released on May 21, 2020.

Deprecations
------------

- Renamed ``Cluster`` to ``CoiledCluster``
