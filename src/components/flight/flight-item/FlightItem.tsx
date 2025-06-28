import { useSearchParams } from "react-router";
import styles from "./FlightItem.module.scss";
import { QUERY_PARAMS_FLIGHT } from "../../../utils/constants/flights.constants";
import type { IFlight } from "../../../types/flight.types";

interface Props {
  item: IFlight;
  i: number;
  onClick: () => void;
}

export function FlightItem({ item, i, onClick }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAMS_FLIGHT);

  return (
    <li
      key={i}
      className={selectedFlight === item.id.toString() ? styles.active : ""}
      onClick={() => {
        setSearchParams({ [QUERY_PARAMS_FLIGHT]: item.id.toString() });
        onClick();
      }}
    >
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <img src={item.logo} alt={item.airline} />
          </div>
          <span>{item.airline}</span>
        </div>
        <div className={styles.right}>
          <span className={styles.numberFly}>{item.aircraftReg}</span>
          <span className={styles.numberFly}>{item.id}</span>
        </div>
      </div>
      <div className={styles.middle}>
        <span className={styles.country}>{item.from.city}</span>
        <span className={styles.country}>{item.to.city}</span>
      </div>
      <div className={styles.bottom}>
        <span>{item.from.code}</span>
        <div className={styles.progress}>
          <div className={styles.progressBar}></div>
          <div className={styles.scale}></div>
          <img src="/src/assets/airplane.png" alt="airplane-icon" />
        </div>
        <span>{item.to.code}</span>
      </div>
    </li>
  );
}
