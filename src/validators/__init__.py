"""
Validators for 4gnosin.github.io data schemas.
"""

__all__ = ["SiteValidator"]


def __getattr__(name: str):
    if name == "SiteValidator":
        from .site_validator import SiteValidator

        return SiteValidator
    raise AttributeError(f"module {__name__!r} has no attribute {name!r}")
