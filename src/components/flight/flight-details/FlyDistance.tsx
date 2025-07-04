import { ProgressBar } from "../../progress-bar/ProgressBar";
import styles from "./FlighDetails.module.scss";

interface Props {
  departureTime: string;
  arrivalTime: string;
}
export function FlyDistance({ departureTime, arrivalTime }: Props) {
  return (
    <div className={styles.distance}>
      <ProgressBar departureTime={departureTime} arrivalTime={arrivalTime} />
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
  );
}
