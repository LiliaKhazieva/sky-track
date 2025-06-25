import { useSearchParams } from "react-router";
import styles from "./FlighDetails.module.scss";
import { flightData } from "../flight/flights.data";
import { QUERY_PARAMS_FLIGHT } from "../flight/flights.constants";

export function FlightDetails() {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAMS_FLIGHT);
  const flight = flightData.find((flight) => flight.id === selectedFlight);
  return (
    <div className={styles.flyDetails}>
      <div className={styles.details}>
        <div className={styles.heading}>
          <div className={styles.container}>
            <span className={styles.title}>{flight?.model}</span>
            <span className={styles.subtitle}>Ryanair</span>
          </div>
          {/* <button>x</button> */}
        </div>
        <img
          src="https://images.unsplash.com/photo-1559270144-0efbe8d2077b?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="airplane"
        />
      </div>
      <div className={styles.flyInfo}>
        <div className={styles.infoContent}>
          <img src="/public/airplane.svg" alt="airplane" />
          <div>
            <h2>{flight?.cityStartShort}</h2>
            <span>{flight?.cityStart}</span>
          </div>
          <div>
            <h2>{flight?.cityEndShort}</h2>
            <span>{flight?.cityEnd}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
