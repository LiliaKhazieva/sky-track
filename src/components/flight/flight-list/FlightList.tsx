import { FLIGHTS_DATA } from "../flights.data";
import styles from "./FlightList.module.scss";
import { FlightItem } from "../flight-item/FlightItem";

export function FlightList() {
  return (
    <div className={styles.flight}>
      <ul>
        {FLIGHTS_DATA.map((item, i) => (
          <FlightItem item={item} i={i} />
        ))}
      </ul>
    </div>
  );
}
