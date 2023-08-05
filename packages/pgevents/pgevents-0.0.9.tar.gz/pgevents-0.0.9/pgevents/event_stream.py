import logging

from pgevents import data_access
from pgevents.context import Context

LOGGER = logging.getLogger(__name__)


class EventStream:
    def __init__(self, connection, handlers, data_access=data_access):
        self.connection = connection
        self.handlers = handlers
        self.data_access = data_access

    @property
    def topics(self):
        return list(self.handlers.keys())

    def process(self):
        while self.process_next():
            pass

    def process_next(self):
        with self.connection:
            with self.connection.cursor() as cursor:
                event = self.get_next(cursor)
                if not event:
                    return False
                handler = self.handlers[event.topic]
                context = self.create_context(event, cursor)
                handler(context)
                event.mark_processed(cursor)
                return True

    def get_next(self, cursor):
        event = self.data_access.get_next_event(cursor, self.topics)
        if not event:
            LOGGER.info("No more events to process")
        return event

    def create_context(self, event, cursor):
        return Context(event, cursor)

    def __eq__(self, other):
        return (
            isinstance(other, self.__class__)
            and self.connection == other.connection
            and self.handlers == other.handlers
        )
