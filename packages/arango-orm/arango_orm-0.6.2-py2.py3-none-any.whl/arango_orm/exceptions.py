"""Exceptions used by arango_orm."""


class MemberExistsException(Exception):
    """Exception to specify that a setting member already exists."""

    pass


class DetachedInstanceError(Exception):
    """Instance is not linked with any database."""

    pass


class SerializationError(Exception):
    """Error serializing data."""

    pass


class DocumentNotFoundError(Exception):
    """Document not found."""

    pass
