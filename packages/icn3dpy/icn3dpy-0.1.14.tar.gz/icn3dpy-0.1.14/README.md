icn3dpy
=======

A simple [IPython/Jupyter](http://jupyter.org/) widget to
embed an interactive [iCn3D](https://github.com/ncbi/icn3d) viewer in a notebook.

The widget is completely static, which means the viewer doesn't need a running
IPython kernel to be useful and web pages and presentations generated from
the notebook will work as expected.  However, this also means there is only
one-way communication between the notebook and the viewer.

If you experience problems, please file 
an [issue](https://github.com/ncbi/icn3d/issues).


Installation
------------

From PyPI:

    pip install icn3dpy


*Important:* In order to use with JupyterLab you must install the JupyterLab extension:

    jupyter labextension install jupyterlab_3dmol



Usage
-----

Open a notebook

    jupyter notebook

and issue

Python (mmdbid only works in Chrome)

    import icn3dpy

    view = icn3dpy.view(q='pdbid=1tup',command='color spectrum')

    view

    view = icn3dpy.view(q='mmtfid=1ffk',command='color spectrum')

    view

    view = icn3dpy.view(q='pdbid=6m0j',command='line graph interaction pairs | !A !E | hbonds,salt bridge,interactions,halogen,pi-cation,pi-stacking | false | threshold 3.8 6 4 3.8 6 6; show selection; add residue number labels')

    view

Command
-------

All [iCn3D commands](https://www.ncbi.nlm.nih.gov/Structure/icn3d/icn3d.html#commands) work.


License
-------

United States Government Work
