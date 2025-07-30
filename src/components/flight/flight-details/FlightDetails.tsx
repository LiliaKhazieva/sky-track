import { useSearchParams } from "react-router";
import styles from "./FlighDetails.module.scss";

import { FLIGHTS_DATA } from "../flights.data";
import { QUERY_PARAMS_FLIGHT } from "../../../utils/constants/flights.constants";

import { FlightNav } from "../flight-nav/FlightNav";
import { FlightInformation } from "./FlightInformation";
import { FlightScheduled } from "./FlightScheduled";
import { FlyDistance } from "./FlyDistance";
import { FlyRoute } from "./FlyRoute";
import { useEffect, useMemo, useState } from "react";
import SkeletonDetails from "../../skeletonDetails/SkeletonDetails";

interface Props {
  onClose: () => void;
}

export function FlightDetails({ onClose }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAMS_FLIGHT);

  const flight = useMemo(() => {
    if (selectedFlight === null) return FLIGHTS_DATA[0];
    return FLIGHTS_DATA.find(
      (flight) => flight.id.toString() === selectedFlight
    )!;
  }, [selectedFlight]);
  if (!flight) return null;

  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

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
      {isLoading ? (
        <SkeletonDetails />
      ) : (
        <div className={styles.flyContent}>
          <FlyRoute flight={flight} />
          <FlyDistance progress={flight.progress} />
          <FlightScheduled />
          <FlightInformation flight={flight} />
          <FlightNav />
        </div>
      )}
    </div>
  );
}
