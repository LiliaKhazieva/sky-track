import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { FlightList } from "../components/flight/flight-list/FlightList";
import { FlightDetails } from "../components/flight/flight-details/FlightDetails";
import { Select } from "../components/filters/Filters";
import { SkyMap } from "../components/map/SkyMap";
import { MAP_DARK, MAP_LIGHT } from "../utils/constants/flights.constants";
import { Pleloader } from "../components/preloader/Pleloader";
import { Error } from "../components/error/Error";
import { useTheme } from "../providers/theme/useTheme";

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
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState<unknown | null>(null);
  const { theme } = useTheme();
  let isHidden = false;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(theme === "light" ? MAP_LIGHT : MAP_DARK);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
        setErrors(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [theme]);

  const togglePopup = () => {
    setIsOpen(true);
  };

  return (
    <div>
      {" "}
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
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          {isLoading ? (
            <Pleloader />
          ) : errors ? (
            <Error />
          ) : (
            <SkyMap data={data} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
