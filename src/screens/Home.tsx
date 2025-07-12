import { useState } from "react";

import { FlightList } from "../components/flight/flight-list/FlightList";
import { FlightDetails } from "../components/flight/flight-details/FlightDetails";
import Header from "../components/header/Header";
import { Select } from "../components/filters/Filters";

const sortByCompany = [
  "All airlines",
  "Turkey",
  "Ireland",
  "Russia",
  "Switzerland",
  "Germany",
];

const sortByCountry = ["All", "Bulgaria", "France", "Portugal", "Ireland"];

function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState<string>(sortByCountry[0]);
  const [selectedSort, setSelectedSort] = useState<string>(sortByCompany[0]);
  const togglePopup = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="leftSection">
          <div className="filters">
            {" "}
            <Select
              options={sortByCountry}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
            <Select
              options={sortByCompany}
              selectedValue={selectedSort}
              setSelectedValue={setSelectedSort}
            />
          </div>
          <FlightList
            togglePopup={togglePopup}
            selectedValue={selectedValue}
            selectedSort={selectedSort}
          />
        </div>
        {isOpen && <FlightDetails onClose={() => setIsOpen(false)} />}
      </div>
    </>
  );
}

export default Home;
