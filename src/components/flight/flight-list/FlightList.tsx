import { FLIGHTS_DATA } from "../flights.data";
import styles from "./FlightList.module.scss";
import { FlightItem } from "../flight-item/FlightItem";
import { useEffect, useMemo, useState } from "react";
import { Skeleton } from "../../skeleton/Skeleton";

interface Props {
  onClick: () => void;
  selectedValue: string;
  loading: boolean;
}

export function FlightList({ onClick, selectedValue, loading }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const flightCont = useMemo(() => {
    if (selectedValue === "All" || !selectedValue) {
      return FLIGHTS_DATA;
    } else {
      return FLIGHTS_DATA.filter(
        (flight) => flight.from.country === selectedValue
      );
    }
  }, [selectedValue]);

  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.flight}>
      <ul className={styles.list}>
        {flightCont.map((item) =>
          isLoading ? (
            <Skeleton />
          ) : (
            <FlightItem item={item} onClick={onClick} />
          )
        )}
      </ul>
    </div>
  );
}
