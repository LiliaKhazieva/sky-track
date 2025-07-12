import type { IFlight } from "../../../types/flight.types";
import styles from "./FlighDetails.module.scss";

export function FlightInformation({ flight }: { flight: IFlight }) {
  return (
    <div className={styles.flyInformation}>
      <h3>Flight information</h3>
      <div className={styles.infoBlock}>
        <div>
          <span>{flight?.airplane.name}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <img
            src={flight?.airplane.flag}
            alt="flag"
            style={{ width: "20px" }}
          />
          <span>{flight?.from.city}</span>
        </div>
        <div>
          <span>Speed</span>
          <span>{flight?.route.speed} km/h</span>
        </div>
        <div>
          <span>Altitude</span>
          <span>{flight?.route.altitude} m</span>
        </div>
      </div>
    </div>
  );
}
