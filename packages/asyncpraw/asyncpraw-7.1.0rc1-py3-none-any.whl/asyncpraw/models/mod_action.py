"""Provide the ModAction class."""
from typing import TYPE_CHECKING

from .base import AsyncPRAWBase

if TYPE_CHECKING:  # pragma: no cover
    from .reddit.redditor import Redditor


class ModAction(AsyncPRAWBase):
    """Represent a moderator action."""

    @property
    def mod(self) -> "Redditor":
        """Return the Redditor who the action was issued by."""
        from asyncpraw.models import Redditor

        return Redditor(self._reddit, name=self._mod)  # pylint: disable=no-member

    @mod.setter
    def mod(self, value: "Redditor"):
        self._mod = value  # pylint: disable=attribute-defined-outside-init
