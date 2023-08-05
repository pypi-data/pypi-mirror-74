# vim: fdm=indent
# author:     Fabio Zanini
# date:       17/06/20
# content:    Kolmogorov Smirnov test on gene expression for AnnData objects
from ._version import version
from .stats import ks_2samp
from .adata import compare
from .config import rc
