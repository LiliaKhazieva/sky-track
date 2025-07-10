import { useState } from "react";

import { FlightList } from "../components/flight/flight-list/FlightList";
import { FlightDetails } from "../components/flight/flight-details/FlightDetails";
import Header from "../components/header/Header";
import { Select } from "../components/filters/Filters";
import { useSearchParams } from "react-router";

const sortByCountry = [
  "All airlines",
  "Turkey",
  "Ireland",
  "Russia",
  "Switzerland",
  "Germany",
];

const options = ["All", "Bulgaria", "France", "Portugal"];

function Home() {
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(options[0]);
  const [selectedSort, setSelectedSort] = useState<string>(sortByCountry[0]);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />

      <div className="wrapper">
        <div className="leftSection">
          <div className="filters">
            {" "}
            <Select
              options={options}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
            <Select
              options={sortByCountry}
              selectedValue={selectedSort}
              setSelectedValue={setSelectedSort}
            />
          </div>
          <FlightList
            onClick={onClick}
            selectedValue={selectedValue}
            selectedSort={selectedSort}
          />
        </div>
        {searchParams.size !== 0 && <FlightDetails isOpen={true} />}
      </div>
    </>
  );
}

export default Home;
