import { FLIGHTS_DATA } from "../flights.data";
import styles from "./FlightList.module.scss";
import { FlightItem } from "../flight-item/FlightItem";
import { useEffect, useMemo, useState } from "react";
import { Skeleton } from "../../skeleton/Skeleton";

interface Props {
  onClick: () => void;
  selectedValue: string;
  selectedSort: string;
}

export function FlightList({ onClick, selectedValue, selectedSort }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const flightCont = useMemo(() => {
    if (selectedValue === "All") return FLIGHTS_DATA;
    return FLIGHTS_DATA.filter((flight) => {
      if (selectedValue && flight.from.country !== selectedValue) {
        return false;
      }
      if (selectedSort && flight.company !== selectedSort) {
        return false;
      }
      return true;
    });
  }, [selectedValue, selectedSort]);

  const sort = flightCont.length > 0 ? flightCont : FLIGHTS_DATA;
  console.log(flightCont);
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
          ? [...Array(4)].map((_) => <Skeleton />)
          : sort.map((item) => (
              <FlightItem key={item.id} item={item} onClick={onClick} />
            ))}
      </ul>
    </div>
  );
}
