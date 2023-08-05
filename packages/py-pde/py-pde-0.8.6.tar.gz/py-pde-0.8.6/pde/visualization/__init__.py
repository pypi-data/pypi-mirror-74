'''
Functions and classes for visualizing simulations.


.. autosummary::
   :nosignatures:

   movies
   plotting
   
.. codeauthor:: David Zwicker <david.zwicker@ds.mpg.de>
'''

from .plotting import plot_magnitudes, plot_kymograph, plot_kymographs
from .movies import movie_scalar, movie_multiple
