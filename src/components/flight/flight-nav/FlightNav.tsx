import { Link } from "react-router";
import { PAGE } from "../../../config/page.config";
import styles from "./FlightNav.module.scss";

export function FlightNav() {
  return (
    <nav className={styles.flyNav}>
      <div>
        <img src="route.svg" alt="route" />
        <Link to={PAGE.ROUTE}>Route</Link>
      </div>
      <div>
        <img src="follow.svg" alt="follow" />
        <Link to={PAGE.FOLLOW}>Follow</Link>
      </div>
      <div>
        <img src="share.svg" alt="share" />
        <Link to={PAGE.SHARE}>Share</Link>
      </div>
      <div>
        <img src="more.svg" alt="more" />
        <Link to={PAGE.MORE}>More</Link>
      </div>
    </nav>
  );
}
