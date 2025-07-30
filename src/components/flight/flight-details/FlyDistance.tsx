import { ProgressBar } from "../../progress-bar/ProgressBar";
import styles from "./FlighDetails.module.scss";

interface Props {
  progress: number;
}
export function FlyDistance({ progress }: Props) {
  return (
    <div className={styles.distance}>
      <ProgressBar progress={progress} />
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
