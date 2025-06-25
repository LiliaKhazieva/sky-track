import { flightData } from "./flights.data";
import styles from "./FlightList.module.scss";
import { useSearchParams } from "react-router";
import { QUERY_PARAMS_FLIGHT } from "./flights.constants";

export function FlightList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedFlight = searchParams.get(QUERY_PARAMS_FLIGHT);

  return (
    <div className={styles.flight}>
      <ul>
        {flightData.map((item, i) => (
          <li
            key={i}
            className={selectedFlight === item.id ? styles.active : ""}
            onClick={() => {
              setSearchParams({ [QUERY_PARAMS_FLIGHT]: item.id });
            }}
          >
            <div className={styles.top}>
              <div className={styles.left}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: `${item.icon}` }}
                ></div>
                <span>{item.model}</span>
              </div>
              <div className={styles.right}>
                <span className={styles.numberFly}>{item.number}</span>
                <span className={styles.numberFly}>{item.id}</span>
              </div>
            </div>
            <div className={styles.middle}>
              <span className={styles.country}>{item.cityStart}</span>
              <span className={styles.country}>{item.cityEnd}</span>
            </div>
            <div className={styles.bottom}>
              <span>{item.cityStartShort}</span>
              <div className={styles.progress}>
                <div className={styles.progressBar}></div>
                <div className={styles.scale}></div>
                <img
                  src="/src/assets/icons8-airplane-50.png"
                  alt="airplane_icon"
                />
              </div>
              <span>{item.cityEndShort}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
