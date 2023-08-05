import logging

from pgevents import data_access, event_stream, constants
from pgevents.utils import timestamps

LOGGER = logging.getLogger(__name__)


def always_continue(app):
    return True


class App:
    def __init__(self, dsn, channel, interval=5, migration_locations=None):
        self.dsn = dsn
        self.channel = channel
        self.interval = interval
        self.migration_locations = [constants.CORE_MIGRATIONS_LOCATION,] + (
            migration_locations or []
        )

        self.last_processed = timestamps.EPOCH

        self.connection = None
        self.event_stream = None
        self.handlers = {}

    def run(self, should_continue=always_continue):
        self.connect()
        self.setup_event_stream()
        self.start_listening()
        try:
            while should_continue(self):
                self.tick()
        finally:
            self.stop_listening()

    def tick(self):
        if self.should_process_events():
            self.process_events()

    def should_process_events(self):
        return self.has_received_notification() or self.has_exceeded_interval()

    def has_received_notification(self):
        self.connection.poll()
        if not self.connection.notifies:
            return False

        LOGGER.debug("Received notification")
        while self.connection.notifies:
            self.connection.notifies.pop()
        return True

    def has_exceeded_interval(self):
        if self.calculate_seconds_since_last_processed() > self.interval:
            LOGGER.debug(f"Exceeded interval of {self.interval} seconds")
            return True
        return False

    def calculate_seconds_since_last_processed(self):
        return (timestamps.now() - self.last_processed).total_seconds()

    def process_events(self):
        LOGGER.debug("Processing events")
        self.last_processed = timestamps.now()
        self.event_stream.process()

    def connect(self):
        self.connection = data_access.connect(self.dsn)

    def setup_event_stream(self):
        self.event_stream = event_stream.EventStream(self.connection, self.handlers)

    def start_listening(self):
        LOGGER.debug("Starting to listen on channel: %s", self.channel)
        with data_access.cursor(self.connection) as cursor:
            data_access.listen(cursor, self.channel)

    def stop_listening(self):
        LOGGER.debug("Stopping listening on channel: %s", self.channel)
        with data_access.cursor(self.connection) as cursor:
            data_access.unlisten(cursor, self.channel)

    def register(self, topic):
        def decorator(func):
            LOGGER.debug(
                "Registering handler '%s' to topic: '%s'", func.__name__, topic
            )
            self.handlers[topic] = func
            return func

        return decorator

    def unregister(self, topic, func):
        LOGGER.debug(
            "Unregistering handler '%s' from topic: '%s'", func.__name__, topic
        )
        try:
            del self.handlers[topic]
        except KeyError:
            pass
