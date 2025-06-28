import styles from "./FlighDetails.module.scss";

export function FlightScheduled() {
  return (
    <div className={styles.flySheduled}>
      <div>
        <span>Sheduled</span>
        <span>08:15</span>
      </div>
      <div>
        <span>Actual</span>
        <span>08:24</span>
      </div>
      <div>
        <span>Sheduled</span>
        <span>13:25</span>
      </div>
      <div>
        <span>Estimated</span>
        <span>13:23</span>
      </div>
    </div>
  );
}
