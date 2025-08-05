import type { IFlight } from "../../types/flight.types";

const getCurrentCoordinates = (
  from: [number, number],
  to: [number, number],
  progressPersent: number
): [number, number] => {
  const ratio = progressPersent / 100;
  const lat = from[0] + (to[0] - from[0]) * ratio;
  const lng = from[1] + (to[1] - from[1]) * ratio;
  return [lat, lng];
};

export const FLIGHTS_DATA: IFlight[] = [
  {
    logo: "logos/turkish.svg",
    airline: "TK143",
    company: "Turkey",
    aircraftReg: "TC-JFP",
    id: "93247",
    from: {
      city: "Sofia",
      country: "Bulgaria",
      countryCode: "BG",
      timezone: "UTC +3",
      code: "SOF",
      coordinates: [42.6977, 23.3219],
    },
    to: {
      city: "Beijing",
      country: "China",
      countryCode: "CN",
      timezone: "UTC +8",
      code: "PEK",
      coordinates: [39.9042, 116.4074],
    },
    airplane: {
      aviaCompany: "Turkish",
      image: "aircrafts/turkish.png",
      name: "Airbus A330",
      flag: "flags/turkey-flag.svg",
    },
    colorGradient: ["#ffdede", "#ffbaba"],
    route: {
      speed: 870,
      altitude: 10600,
    },
    progress: 70,
    currentLocation: {
      coordinates: getCurrentCoordinates(
        [42.6977, 23.3219],
        [39.9042, 116.4074],
        70
      ),
    },
  },
  {
    logo: "logos/ryanair.svg",
    airline: "RN1782",
    aircraftReg: "D-AISP",
    company: "Ireland",
    id: "7842",

    from: {
      city: "Dublin",
      country: "Ireland",
      countryCode: "IE",
      timezone: "UTC +1",
      code: "DUB",
      coordinates: [53.349805, -6.26031],
    },
    to: {
      city: "Larnaca",
      country: "Cyprus",
      countryCode: "CY",
      timezone: "UTC +3",
      code: "LCA",
      coordinates: [34.7758, 33.6295],
    },
    airplane: {
      aviaCompany: "Rinair",
      image: "aircrafts/ryanair.png",
      name: "Boeing 737-800",
      flag: "flags/ireland-flag.svg",
    },
    colorGradient: ["#A1C6E1", "#88B5E0"],
    route: {
      speed: 840,
      altitude: 11200,
    },
    progress: 50,
    currentLocation: {
      coordinates: getCurrentCoordinates(
        [53.349805, -6.26031],
        [34.7758, 33.6295],
        50
      ),
    },
  },
  {
    logo: "logos/s7.svg",
    airline: "S7124",
    aircraftReg: "RA-73415",
    company: "Russia",
    id: "88015",

    from: {
      city: "Nice",
      country: "France",
      countryCode: "FR",
      timezone: "UTC +2",
      code: "NCE",
      coordinates: [43.7102, 7.262],
    },
    to: {
      city: "Tbilisi",
      country: "Georgia",
      countryCode: "GE",
      timezone: "UTC +4",
      code: "TBS",
      coordinates: [41.7151, 44.8271],
    },
    airplane: {
      aviaCompany: "S7",
      image: "aircrafts/s7.png",
      name: "Airbus A320neo",
      flag: "flags/russia-flag.svg",
    },
    colorGradient: ["#d6ffe5", "#96f2c1"],
    route: {
      speed: 860,
      altitude: 10900,
    },
    progress: 68,
    currentLocation: {
      coordinates: getCurrentCoordinates(
        [43.7102, 7.262],
        [41.7151, 44.8271],
        68
      ),
    },
  },
  {
    logo: "logos/swiss.svg",
    airline: "LX318",
    aircraftReg: "HB-JHK",
    company: "Switzerland",
    id: "94102",
    from: {
      city: "Porto",
      country: "Portugal",
      countryCode: "PT",
      timezone: "UTC +1",
      code: "OPO",
      coordinates: [43.7102, 7.262],
    },
    to: {
      city: "Baku",
      country: "Azerbaijan",
      countryCode: "AZ",
      timezone: "UTC +4",
      code: "GYD",
      coordinates: [43.7102, 9.262],
    },
    airplane: {
      aviaCompany: "NordWind",
      image: "aircrafts/swiss.png",
      name: "Airbus A220-300",
      flag: "flags/switzerland-flag.svg",
    },
    colorGradient: ["#e6e6ff", "#a8b4ff"],
    route: {
      speed: 830,
      altitude: 10700,
    },
    progress: 68,
    currentLocation: {
      coordinates: getCurrentCoordinates(
        [43.7102, 7.262],
        [43.7102, 9.262],
        68
      ),
    },
  },
  {
    logo: "logos/lufthansa.svg",
    airline: "LH401",
    aircraftReg: "D-AIXD",
    company: "Germany",
    id: "90936",

    from: {
      city: "Burgas",
      country: "Bulgaria",
      countryCode: "BG",
      timezone: "UTC +3",
      code: "BOJ",
      coordinates: [41.14961, -8.61099],
    },
    to: {
      city: "Muscat",
      country: "Oman",
      countryCode: "OM",
      timezone: "UTC +4",
      code: "MCT",
      coordinates: [40.4093, 49.8671],
    },
    airplane: {
      aviaCompany: "Lufthansa",
      image: "aircrafts/lufthansa.png",
      name: "Airbus A350-900",
      flag: "flags/germany-flag.svg",
    },
    colorGradient: ["#e5f2ff", "#9dd2f9"],
    route: {
      speed: 890,
      altitude: 11300,
    },
    progress: 85,
    currentLocation: {
      coordinates: getCurrentCoordinates(
        [41.14961, -8.61099],
        [40.4093, 49.8671],
        85
      ),
    },
  },
];
