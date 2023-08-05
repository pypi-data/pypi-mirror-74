API_VERSION = (
    "1."
    "8."
    "7"
)  # type: str
"""The semantic version of this API."""

PROTOBUF_VERSION = 1  # type: int
"""The version of Protobuf this API can read and write from.
Attempts to load old Protobuf versions will raise a ``ValueError``.
"""
