import { FLIGHTS_DATA } from "../flights.data";
import styles from "./FlightList.module.scss";
import { FlightItem } from "../flight-item/FlightItem";
import { useEffect, useState } from "react";
import { Skeleton } from "../../skeleton/Skeleton";

interface Props {
  selectedValue: string;
  selectedSort: string;
  togglePopup: () => void;
}

export function FlightList({
  selectedValue,
  selectedSort,
  togglePopup,
}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const filteredItems =
    selectedValue === "All" || selectedSort === "All airlines"
      ? FLIGHTS_DATA
      : FLIGHTS_DATA.filter((item) => {
          const categoryMatch = item.from.country === selectedValue;
          const nameMatch = item.company === selectedSort;
          return categoryMatch && nameMatch;
        });

  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.flight}>
      <ul className={styles.list}>
        {isLoading
          ? [...Array(5)].map((_) => <Skeleton />)
          : filteredItems.length === 0
          ? "Нет рейсов по выбранному фильтру"
          : filteredItems.map((item) => (
              <FlightItem key={item.id} item={item} togglePopup={togglePopup} />
            ))}
      </ul>
    </div>
  );
}
