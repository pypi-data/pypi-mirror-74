|PyPI| |travis| |Docs|

scArches - single-cell architecture surgery
=========================================================================
.. raw:: html

 <img src="https://user-images.githubusercontent.com/33202701/85222703-bbd96980-b3bd-11ea-927b-00d21153f97b.jpg" width="400px" align="left">

scArches is a package to integrate newly produced single-cell datasets into integrated references atlases. Our method can facilitate large collaborative projects with decentralised training and integration of multiple datasets by different groups. scArches is compatible with `scanpy <https://scanpy.readthedocs.io/en/stable/>`_. and hosts efficient implementations of all conditional generative models for single-cell data. 

What can you do with scArches?
-------------------------------
- Integrate many single-cell datasets and share the trained model. Data sharing is also possible, but optional.
- Download a pre-trained model for your atlas of interest, update it wih new datasets and share with your collaborators.
- Project and integrate query datasets on the top of a reference and use latent repesentation for downstream tasks, e.g. differential testing and clustering.

Usage
-------------------------------
See `here <https://scarches.readthedocs.io/>`_ for documentation and tutorials.


Support and contribute
-------------------------------
If you have questions or a new architecture or a model that could be integrated in to our pipeline, you can
post an `issue <https://github.com/theislab/scarches/issues/new>`__ or reach us by `email <mailto:mo.lotfollahi@gmail.com>`_. Our package supports tf/keras now but a pytorch version will be added very soon.

Reference
-------------------------------



.. |PyPI| image:: https://img.shields.io/pypi/v/scarches.svg
   :target: https://pypi.org/project/scarches

.. |PyPIDownloads| image:: https://pepy.tech/badge/scarches
   :target: https://pepy.tech/project/scarches

.. |Docs| image:: https://readthedocs.org/projects/scarches/badge/?version=latest
   :target: https://scarches.readthedocs.io

.. |travis| image:: https://travis-ci.com/theislab/scarches.svg?branch=master
    :target: https://travis-ci.com/theislab/scarches


.. toctree::
   :maxdepth: 1
   :caption: Main
   :hidden:

   about
   installation
   api/index.rst
   model_sharing
   training_tips

.. toctree::
   :maxdepth: 1
   :caption: Examples
   :hidden:

   pancreas_pipeline
   zenodo_pancreas_from_pretrained
   zenodo_pancreas_from_scratch


