import { useSearchParams } from "react-router";
import styles from "./FlighDetails.module.scss";

import { FLIGHTS_DATA } from "../flights.data";
import { QUERY_PARAMS_FLIGHT } from "../../../utils/constants/flights.constants";

import { FlightNav } from "../flight-nav/FlightNav";

interface Props {
  isOpen: boolean;
}

export function FlightDetails({ isOpen }: Props) {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAMS_FLIGHT);
  const flight = FLIGHTS_DATA.find(
    (flight) => flight.id.toString() === selectedFlight
  );
  return (
    isOpen && (
      <div className={styles.flyDetails}>
        <div
          className={styles.details}
          style={{
            backgroundImage: `url(${flight?.airplane.image}), linear-gradient(${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`,
          }}
        >
          <div className={styles.heading}>
            <div className={styles.container}>
              <span className={styles.title}>{flight?.airline}</span>
              <span className={styles.subtitle}>
                {flight?.airplane.aviaCompany}
              </span>
            </div>
            <button>
              <img className={styles.close} src="/close.svg" alt="close" />
            </button>
          </div>
        </div>
        <div className={styles.flyInfo}>
          <div className={styles.infoContent}>
            <img src="/airplane.svg" alt="airplane" />
            <div>
              <h2>{flight?.from.code}</h2>
              <span>{flight?.from.city}</span>
            </div>
            <div>
              <h2>{flight?.to.code}</h2>
              <span>{flight?.to.city}</span>
            </div>
          </div>
          <div className={styles.distance}>
            <div className={styles.progress}>
              <div className={styles.progressBar}></div>
              <div className={styles.scale}></div>
              <img src="/src/assets/airplane.png" alt="airplane_icon" />
            </div>
            <div className={styles.distanceStatistic}>
              <div>
                <span>2 715 km</span>
                <div></div>
                <span>3h 1m</span>
              </div>
              <div>
                <span>882 km</span>
                <div></div>
                <span>59m</span>
              </div>
            </div>
          </div>
          <div className={styles.reisContent}>
            <div>
              <span>Sheduled</span>
              <span>08:15</span>
            </div>
            <div>
              <span>Sheduled</span>
              <span>08:15</span>
            </div>
            <div>
              <span>Sheduled</span>
              <span>08:15</span>
            </div>
            <div>
              <span>Sheduled</span>
              <span>08:15</span>
            </div>
          </div>
          <div className={styles.flyInformation}>
            <h3>Flight information</h3>
            <div className={styles.infoBlock}>
              <div>
                <span>{flight?.airplane.name}</span>
              </div>
              <div>
                <span>🇮🇪 Ireland</span>
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
          <FlightNav />
        </div>
      </div>
    )
  );
}
