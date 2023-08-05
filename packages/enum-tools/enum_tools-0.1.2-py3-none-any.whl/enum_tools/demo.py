# stdlib
from enum import Enum

# this package
from typing import List

from enum_tools.documentation import document_enum
import enum_tools.documentation

enum_tools.documentation.INTERACTIVE = True


@document_enum
class People(int, Enum):
	"""
	An enumeration of people
	"""

	Bob = bob = 1  # noqa  # doc: A person called Bob  # doc: another doc # isort: ignore
	Alice = 2  # doc: A person called Alice
	Carol = 3  # doc: A person called Carol

	@classmethod
	def iter_values(cls):
		return iter(cls)

	@classmethod
	def as_list(cls) -> List:
		return list(cls)
