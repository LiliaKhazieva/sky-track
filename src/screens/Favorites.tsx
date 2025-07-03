import { useMemo } from "react";
import { FlightItem } from "../components/flight/flight-item/FlightItem";
import { FLIGHTS_DATA } from "../components/flight/flights.data";
import Header from "../components/header/Header";
import { useAppSelector } from "../hooks/useAppSelector";
import s from "./Favorites.module.scss";
import { Plane } from "lucide-react";

export function Favorites() {
  const favorites = useAppSelector((state) => state.favorites);

  const fligths = useMemo(() => {
    return FLIGHTS_DATA.filter((fligth) =>
      favorites.favorites.includes(fligth.id.toString())
    );
  }, [favorites]);

  return (
    <>
      <Header />
      <h1 className={s.title}>Favorites</h1>
      <div className={s.favorites}>
        {fligths.map((fligth) => (
          <FlightItem key={fligth.id} item={fligth} />
        ))}
      </div>
    </>
  );
}
