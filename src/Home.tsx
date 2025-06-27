import { FlightDetails } from "./components/flight/flight-details/FlightDetails";
import { FlightList } from "./components/flight/flight-list/FlightList";
import { ThemeToggle } from "./components/theme-toggle/ThemeToggle";

function Home() {
  return (
    <div className="wrapper">
      <FlightList />
      <FlightDetails />
      <ThemeToggle />
    </div>
  );
}

export default Home;
