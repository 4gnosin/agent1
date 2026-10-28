"""
Retry helper για Gemini API (503 / high demand) — χωρίς να σταματάει το pipeline.
"""

from __future__ import annotations

import random
import time
from typing import Any, Callable


def is_retriable_api_error(exc: BaseException) -> bool:
    text = str(exc).lower()
    markers = (
        "503",
        "unavailable",
        "high demand",
        "resource_exhausted",
        "429",
        "rate limit",
        "temporarily",
        "try again",
        "deadline exceeded",
        "internal error",
        "500",
    )
    return any(m in text for m in markers)


def call_with_retry(
    fn: Callable[..., Any],
    *args: Any,
    max_attempts: int = 20,
    base_delay: float = 5.0,
    max_delay: float = 90.0,
    label: str = "API",
    **kwargs: Any,
) -> Any:
    """
    Επαναλαμβάνει το fn μέχρι επιτυχίας ή εξάντλησης προσπαθειών.
    Σε 503/UNAVAILABLE περιμένει με exponential backoff + jitter.
    """
    last_exc: BaseException | None = None
    for attempt in range(1, max_attempts + 1):
        try:
            return fn(*args, **kwargs)
        except Exception as exc:  # noqa: BLE001
            last_exc = exc
            if not is_retriable_api_error(exc) or attempt >= max_attempts:
                raise
            delay = min(max_delay, base_delay * (2 ** (attempt - 1)))
            delay = delay * (0.7 + 0.6 * random.random())
            print(
                f"⏳ {label}: προσωρινό σφάλμα API "
                f"(προσπάθεια {attempt}/{max_attempts}) — επανάληψη σε {delay:.0f}s…"
            )
            print(f"   ({exc})")
            time.sleep(delay)
    assert last_exc is not None
    raise last_exc
