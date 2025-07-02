import { FLIGHTS_DATA } from "../flights.data";
import styles from "./FlightList.module.scss";
import { FlightItem } from "../flight-item/FlightItem";
import { useMemo, useState } from "react";
import Select from "../../filters/Filters";

interface Props {
  onClick: () => void;
}
const options = [
  { value: "All", label: "All" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "France", label: "France" },
];

export function FlightList({ onClick }: Props) {
  const [selectedValue, setSelectedValue] = useState<string>("");
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
      <Select
        options={options}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <ul>
        {flightCont.map((item) => (
          <FlightItem key={item.id} item={item} onClick={onClick} />
        ))}
      </ul>
    </div>
  );
}
