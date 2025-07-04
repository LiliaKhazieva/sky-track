import { useState } from "react";

import { FlightList } from "../components/flight/flight-list/FlightList";
import { FlightDetails } from "../components/flight/flight-details/FlightDetails";
import Header from "../components/header/Header";
import { Select } from "../components/filters/Filters";
import { useSearchParams } from "react-router";

const options = [
  { value: "All", label: "All" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "France", label: "France" },
];

function Home() {
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />

      <div className="wrapper">
        <FlightList onClick={onClick} selectedValue={selectedValue} />
        <div className="filters">
          <Select
            options={options}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </div>
        {searchParams.size !== 0 && <FlightDetails isOpen={true} />}
      </div>
    </>
  );
}

export default Home;
