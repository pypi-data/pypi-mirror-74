=========
keggstand
=========


.. image:: https://img.shields.io/pypi/v/keggstand.svg
        :target: https://pypi.python.org/pypi/keggstand

.. image:: https://img.shields.io/travis/daniaki/keggstand.svg
        :target: https://travis-ci.com/daniaki/keggstand


KEGG API client and parsers for pathway protein-protein interactions


* Free software: MIT license


Usage
-----

To use the API client, instantiate a new instance:

.. code-block::

   client = Kegg(cache=True)

To list organism codes in KEGG:

.. code-block::

   client.organisms()

To list available pathway accessions and names for a given organism:

.. code-block::

   accessions = client.list_pathways(organism='hsa')

To parse a particular pathway into a dataframe of protein-protein interactions, pass a KEGG pathway
accession to the method below:

.. code-block::

   pathway = client.get_pathway(pathway='path:hsa01521')
   
   # Inspect individual protein/genes parsed from XML file
   pathway.entries
   
   # Inspect relations between entries parsed from XML file
   pathway.relations

   # Pandas DataFrame of interactions with annotated post-translational modifications
   pathway.interactions

To make a call to the accession mapping service you can convert a source database to a destination 
database:

.. code-block::

   client.convert(source='hsa', destination='uniprot')

This will create a mapping from KEGG hsa identifiers to uniprot swissprot identifiers.


Credits
-------

This package was created with Cookiecutter_ and the `audreyr/cookiecutter-pypackage`_ project template.

.. _Cookiecutter: https://github.com/audreyr/cookiecutter
.. _`audreyr/cookiecutter-pypackage`: https://github.com/audreyr/cookiecutter-pypackage
