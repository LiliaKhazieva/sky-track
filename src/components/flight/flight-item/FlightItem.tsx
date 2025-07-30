import { useSearchParams } from "react-router";
import styles from "./FlightItem.module.scss";
import { QUERY_PARAMS_FLIGHT } from "../../../utils/constants/flights.constants";
import type { IFlight } from "../../../types/flight.types";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  addFavorite,
  removeFavorite,
} from "../../../store/favorites/favorites.slice";
import { Heart } from "lucide-react";
import { ProgressBar } from "../../progress-bar/ProgressBar";
import { FLIGHTS_DATA } from "../flights.data";

interface Props {
  item: IFlight;
  togglePopup?: () => void;
}

export function FlightItem({ item, togglePopup }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAMS_FLIGHT);

  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);
  const isFavorite = favorites.favorites.includes(item.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item.id));
    } else {
      dispatch(addFavorite(item.id));
    }
  };

  return (
    <div onClick={togglePopup}>
      <li
        className={`${styles.item} ${
          selectedFlight === item.id ? styles.active : ""
        }`}
        onClick={() => {
          setSearchParams({ [QUERY_PARAMS_FLIGHT]: item.id });
        }}
      >
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.icon}>
              <img src={FLIGHTS_DATA[0].logo} alt={item.airline} />
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
          <ProgressBar progress={item.progress} />
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
    </div>
  );
}
