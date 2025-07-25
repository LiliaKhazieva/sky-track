import { useSearchParams } from "react-router";
import styles from "./FlighDetails.module.scss";

import { FLIGHTS_DATA } from "../flights.data";
import { QUERY_PARAMS_FLIGHT } from "../../../utils/constants/flights.constants";

import { FlightNav } from "../flight-nav/FlightNav";
import { FlightInformation } from "./FlightInformation";
import { FlightScheduled } from "./FlightScheduled";
import { FlyDistance } from "./FlyDistance";
import { FlyRoute } from "./FlyRoute";
import { useMemo } from "react";

interface Props {
  onClose: () => void;
}

export function FlightDetails({ onClose }: Props) {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAMS_FLIGHT);

  const flight = useMemo(() => {
    if (selectedFlight === null) return FLIGHTS_DATA[0];
    return FLIGHTS_DATA.find(
      (flight) => flight.id.toString() === selectedFlight
    )!;
  }, [selectedFlight]);
  if (!flight) return null;

  return (
    <div className={styles.details}>
      <div
        className={styles.flyHeader}
        style={{
          backgroundImage: `linear-gradient(${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`,
        }}
      >
        <img src={flight?.airplane.image} alt="image" />
        <div className={styles.heading}>
          <div className={styles.container}>
            <span className={styles.title}>{flight?.airline}</span>
            <span className={styles.subtitle}>
              {flight?.airplane.aviaCompany}
            </span>
          </div>
          <button>
            <img
              onClick={onClose}
              className={styles.close}
              src="close.svg"
              alt="close"
            />
          </button>
        </div>
      </div>
      <div className={styles.flyContent}>
        <FlyRoute flight={flight} />
        <FlyDistance
          arrivalTime={flight?.arrivalTime}
          departureTime={flight?.departureTime}
        />
        <FlightScheduled />
        <FlightInformation flight={flight} />
        <FlightNav />
      </div>
    </div>
  );
}
