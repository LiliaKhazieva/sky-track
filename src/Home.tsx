import { FlightDetails } from "./components/flight-details/FlightDetails";
import { FlightList } from "./components/flight/FlightList";

function Home() {
  return (
    <div className="wrapper">
      <FlightList />
      <FlightDetails />
    </div>
  );
}

export default Home;
