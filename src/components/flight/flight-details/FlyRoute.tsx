import type { IFlight } from "../../../types/flight.types";
import styles from "./FlighDetails.module.scss";

export function FlyRoute({ flight }: { flight: IFlight }) {
  return (
    <div className={styles.route}>
      <img className={styles.airplane} src="airplane.svg" alt="airplane" />
      <div>
        <h2>{flight?.from.code}</h2>
        <span>{flight?.from.city}</span>
      </div>
      <div>
        <h2>{flight?.to.code}</h2>
        <span>{flight?.to.city}</span>
      </div>
    </div>
  );
}
