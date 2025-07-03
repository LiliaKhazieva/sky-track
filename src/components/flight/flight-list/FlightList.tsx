import { FLIGHTS_DATA } from "../flights.data";
import styles from "./FlightList.module.scss";
import { FlightItem } from "../flight-item/FlightItem";
import { useMemo, useState } from "react";
import Select from "../../filters/Filters";

interface Props {
  onClick: () => void;

  selectedValue: string;
}

export function FlightList({ onClick, selectedValue }: Props) {
  const flightCont = useMemo(() => {
    if (selectedValue === "All" || !selectedValue) {
      return FLIGHTS_DATA;
    } else {
      return FLIGHTS_DATA.filter(
        (flight) => flight.from.country === selectedValue
      );
    }
  }, [selectedValue]);

  return (
    <div className={styles.flight}>
      <ul className={styles.list}>
        {flightCont.map((item) => (
          <FlightItem key={item.id} item={item} onClick={onClick} />
        ))}
      </ul>
    </div>
  );
}
