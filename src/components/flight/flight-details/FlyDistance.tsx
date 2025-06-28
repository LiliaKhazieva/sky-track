import styles from "./FlighDetails.module.scss";
export function FlyDistance() {
  return (
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
  );
}
