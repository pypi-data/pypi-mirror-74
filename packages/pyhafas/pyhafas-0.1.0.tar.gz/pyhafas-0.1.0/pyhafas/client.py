import datetime
from typing import Dict, List

from .profile import BaseProfile, DBProfile
from .types.fptf import Journey, Leg, Station, StationBoardRequestType


class HafasClient:
    def __init__(
            self,
            profile: BaseProfile = DBProfile(),
            ua: str = "pyhafas",
            debug: bool = False):

        self.profile = profile
        self.useragent = ua
        self.debug = debug

    def departures(
            self,
            station,
            date: datetime.datetime,
            max_journeys: int = -1,
            duration: int = -1,
            products: Dict[str, bool] = {}) -> List[Leg]:
        if not isinstance(station, Station):
            station = Station(station)

        body = self.profile.format_station_board_request(
            station,
            StationBoardRequestType.DEPARTURE,
            date,
            max_journeys,
            duration,
            products
        )
        res = self.profile.request(body)

        return self.profile.parse_station_board_request(res)

    def arrivals(
            self,
            station,
            date: datetime.datetime,
            max_journeys: int = -1,
            duration: int = -1,
            products: Dict[str, bool] = {}) -> List[Leg]:
        if not isinstance(station, Station):
            station = Station(station)

        body = self.profile.format_station_board_request(
            station,
            StationBoardRequestType.ARRIVAL,
            date,
            max_journeys,
            duration,
            products
        )
        res = self.profile.request(body)

        return self.profile.parse_station_board_request(res)

    def journeys(
            self,
            origin,
            destination,
            date: datetime.datetime,
            via: List = [],
            min_change_time: int = 0,
            max_changes: int = -1,
            products: Dict[str, bool] = {}
    ) -> List[Journey]:
        if not isinstance(origin, Station):
            origin = Station(origin)
        if not isinstance(destination, Station):
            destination = Station(destination)
        for via_station in via:
            if not isinstance(via_station, Station):
                via[via.index(via_station)] = Station(via_station)

        body = self.profile.format_journeys_request(
            origin,
            destination,
            via,
            date,
            min_change_time,
            max_changes,
            products
        )
        res = self.profile.request(body)

        return self.profile.parse_journeys_request(res)

    def journey(self, journey) -> Journey:
        if not isinstance(journey, Journey):
            journey = Journey(journey)

        body = self.profile.format_journey_request(journey)
        res = self.profile.request(body)

        return self.profile.parse_journey_request(res)

    def locations(self, term: str) -> List[Station]:
        body = self.profile.format_location_request(term)
        res = self.profile.request(body)

        return self.profile.parse_location_request(res)

    def trip(self, id: str):
        body = self.profile.format_trip_request(id)
        res = self.profile.request(body)

        return self.profile.parse_trip_request(res)

    def stop(self, stop):
        pass

    def nearby(self, location):
        pass

    def radar(self, north, west, south, east):
        pass
