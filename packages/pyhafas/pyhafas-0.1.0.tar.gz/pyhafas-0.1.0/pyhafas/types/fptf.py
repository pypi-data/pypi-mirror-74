import datetime
from enum import Enum
from typing import List, Optional, Union


class StationBoardRequestType(Enum):
    DEPARTURE = 'DEP'
    ARRIVAL = 'ARR'

    def __repr__(self):
        return '<%s.%s>' % (self.__class__.__name__, self.name)


class Mode(Enum):
    TRAIN = 'train'
    BUS = 'bus'
    WATERCRAFT = 'watercraft'
    TAXI = 'taxi'
    GONDOLA = 'gondola'
    AIRCRAFT = 'aircraft'
    CAR = 'car'
    BICYCLE = 'bicycle'
    WALKING = 'walking'

    def __repr__(self):
        return '<%s.%s>' % (self.__class__.__name__, self.name)


class Station:
    def __init__(self, id: Union[str, int], **kwargs):
        self.id = id
        self.name: Optional[str] = kwargs.get('name')
        self.latitude: Optional[float] = kwargs.get('latitude')
        self.longitude: Optional[float] = kwargs.get('longitude')

    def __repr__(self):
        return "%s(%r)" % (self.__class__, self.__dict__)


class Journey:
    def __init__(self, id: Union[str, int], **kwargs):
        self.id = id
        self.date: Optional[datetime.date] = kwargs.get('date')
        self.duration: Optional[datetime.timedelta] = kwargs.get('duration')
        self.legs: Optional[List[Leg]] = kwargs.get('legs')

    def __repr__(self):
        return "%s(%r)" % (self.__class__, self.__dict__)


class Leg:
    def __init__(self, id: Union[str, int], **kwargs):
        self.id = id
        self.name: Optional[str] = kwargs.get('name')
        self.origin: Station = kwargs['origin']
        self.mode: Mode = kwargs.get('mode', Mode.TRAIN)
        self.cancelled: bool = kwargs.get('cancelled', False)
        self.destination: Station = kwargs['destination']
        self.departure: datetime.datetime = kwargs['departure']
        self.departureDelay: Optional[datetime.timedelta] = kwargs.get(
            'departureDelay', None)
        self.departurePlatform: Optional[str] = kwargs.get(
            'departurePlatform', None)
        self.arrival: datetime.datetime = kwargs['arrival']
        self.arrivalDelay: Optional[datetime.timedelta] = kwargs.get(
            'arrivalDelay', None)
        self.arrivalPlatform: Optional[str] = kwargs.get(
            'arrivalPlatform', None)
        self.stopovers: Optional[List[Stopover]
                                 ] = kwargs.get('stopovers', None)
        self.distance: Optional[int] = kwargs.get('distance', None)

    def __repr__(self):
        return "%s(%r)" % (self.__class__, self.__dict__)


class Stopover:
    def __init__(self, **kwargs):
        self.stop: Station = kwargs.get('stop')
        self.cancelled: bool = kwargs.get('cancelled', False)
        self.arrival: Optional[datetime.datetime] = kwargs.get('arrival', None)
        self.arrivalDelay: Optional[datetime.timedelta] = kwargs.get(
            'arrivalDelay', None)
        self.arrivalPlatform: Optional[str] = kwargs.get(
            'arrivalPlatform', None)
        self.departure: Optional[datetime.datetime] = kwargs.get(
            'departure', None)
        self.departureDelay: Optional[datetime.timedelta] = kwargs.get(
            'departureDelay', None)
        self.departurePlatform: Optional[str] = kwargs.get(
            'departurePlatform', None)

    def __repr__(self):
        return "%s(%r)" % (self.__class__, self.__dict__)
