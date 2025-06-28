import { useEffect, useState } from "react";

import { FlightList } from "./components/flight/flight-list/FlightList";
import { ThemeToggle } from "./components/theme-toggle/ThemeToggle";
import { FlightDetails } from "./components/flight/flight-details/FlightDetails";

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
      <div className="toggle">
        <ThemeToggle />
      </div>
      <FlightDetails isOpen={isOpen} />
    </div>
  );
}

export default Home;
