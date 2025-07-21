import { useSearchParams } from "react-router";
import { QUERY_PARAMS_FLIGHT } from "../utils/constants/flights.constants";
import { FLIGHTS_DATA } from "../components/flight/flights.data";
import { useMemo } from "react";

export const useFlight = () => {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAMS_FLIGHT);

  const flight = useMemo(
    () =>
      FLIGHTS_DATA.find((flight) => flight.id.toString() === selectedFlight),
    [selectedFlight]
  ); //нашли первого совпавшего по id
  return { flight };
};
