"""A package which allow parsing Reussian receipts."""

__version__ = "0.0.21"
__license__ = "MIT"


from .receipt_parser import RuleBased  # type: ignore
from .finder import Finder  # type: ignore
from .normalizer import Normalizer  # type: ignore
