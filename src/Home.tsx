import { useEffect, useState } from "react";
import { FlightDetails } from "./components/flight/flight-details/FlightDetails";
import { FlightList } from "./components/flight/flight-list/FlightList";
import { ThemeToggle } from "./components/theme-toggle/ThemeToggle";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    history.replaceState(null, "", location.pathname);
  }, []);
  return (
    <div className="wrapper">
      <FlightList onClick={onClick} />
      <FlightDetails isOpen={isOpen} />
      <ThemeToggle />
    </div>
  );
}

export default Home;
