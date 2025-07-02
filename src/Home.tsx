import { useState } from "react";

import { FlightList } from "./components/flight/flight-list/FlightList";
import { FlightDetails } from "./components/flight/flight-details/FlightDetails";
import Header from "./components/header/Header";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <FlightList onClick={onClick} />
        <div className="filters"></div>
        <FlightDetails isOpen={isOpen} />
      </div>
    </>
  );
}

export default Home;
