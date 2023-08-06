bwapy
=====

*This package is no longer maintained by Oxford Nanopore Technologies. It is left here
for posterity as we know of no other python binding to bwa.*
---

[![Build Status](https://travis-ci.org/nanoporetech/bwapy.svg?branch=master)](https://travis-ci.org/nanoporetech/bwapy)

Python bindings to `bwa mem` aligner; sufficient to load and index and perform
alignments of sequences to the index to obtain basic statistics.

These python bindings are licensed under Mozilla Public License 2.0, bwa is licenced
under GNU General Public License v3.0.

Documentation can be found at https://nanoporetech.github.io/bwapy/.

Installation
------------

The git source repository contains bwa as a submodule. The repository should therefore
be cloned using the recursive option.

The package `setup.py` script requires `libbwa.a` to have been built in the submodule
directory before running. This can be performed via the `libbwa.a` target, which first
makes some amendments to the bwa/Makefile. To build and install the package one should
therefore run:

    git clone --recursive https://github.com/nanoporetech/bwapy.git
    cd bwapy
    make bwa/libbwa.a 
    python setup.py install


Performing Alignments
---------------------

The `BwaAligner` class provides a pythonic interface to `bwa mem` aligner. It
takes as input a bwa index fileset on construction and can then be used to find
alignments of sequences given as strings:

```python
from bwapy import BwaAligner
index = 'path/to/index' # the path given to bwa index
seq = 'ACGATCGCGATCGA'

aligner = BwaAligner(index)
alignments = aligner.align_seq(seq)
print('Found {} alignments.'.format(len(alignments))
for aln in alignments:
    print('  ', aln)
```

The alignments are returned as a named tuple, e.g.:

```python
Alignment(rname='yeast', orient='+', pos=0, mapq=60, cigar='915M3D29M3D27M3D13M', NM=12)
```

Alignment parameters can be given as they are on the `bwa mem` command line:

```python
from bwapy import BwaAligner
index = 'path/to/index'
options = '-x ont2d -A 1 -B 0'
aligner = BwaAligner(index, options=options)
```

Some options which do not make sense when aligning single sequences, have been
disabled (notably options related to paired-end reads).
