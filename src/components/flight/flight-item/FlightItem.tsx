import { useSearchParams } from "react-router";
import styles from "./FlightItem.module.scss";
import { QUERY_PARAMS_FLIGHT } from "../../../utils/constants/flights.constants";
import type { IFlight } from "../../../types/flight.types";
import { LikeToggle } from "../../like-toggle/LikeToggle";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  addFavorite,
  removeFavorite,
} from "../../../store/favorites/favorites.slice";
import { Heart } from "lucide-react";

interface Props {
  item: IFlight;
  onClick: () => void;
}

export function FlightItem({ item, onClick }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAMS_FLIGHT);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);
  const isFavorite = favorites.favorites.includes(item.id.toString());

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item.id.toString()));
    } else {
      dispatch(addFavorite(item.id.toString()));
    }
  };

  return (
    <li
      className={`${styles.item} ${
        selectedFlight === item.id.toString() ? styles.active : ""
      }`}
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
        <div onClick={handleToggleFavorite} style={{ marginTop: "5px" }}>
          {isFavorite ? (
            <Heart color="#ea5c1f" fill="#ea5c1f" size={30} />
          ) : (
            <Heart color="#fff" size={30} />
          )}
        </div>
      </div>
    </li>
  );
}
