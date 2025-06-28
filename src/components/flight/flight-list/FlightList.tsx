import { FLIGHTS_DATA } from "../flights.data";
import styles from "./FlightList.module.scss";
import { FlightItem } from "../flight-item/FlightItem";

interface Props {
  onClick: () => void;
}
export function FlightList({ onClick }: Props) {
  return (
    <div className={styles.flight}>
      <ul>
        {FLIGHTS_DATA.map((item, i) => (
          <FlightItem key={i} item={item} i={i} onClick={onClick} />
        ))}
      </ul>
    </div>
  );
}
