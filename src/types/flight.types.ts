export interface IFlightAirplane {
  aviaCompany: string;
  image: string;
  name: string;
  flag: string;
}

export interface IFlightRoute {
  speed: number;
  altitude: number;
}

export interface IFlightLocation {
  city: string;
  country: string;
  countryCode: string;
  timezone: string;
  code: string;
}

export interface IFlight {
  id: number;
  airplane: IFlightAirplane;
  route: IFlightRoute;
  logo: string;
  colorGradient: [string, string];
  airline: string;
  aircraftReg: string;
  departureTime: string;
  arrivalTime: string;
  from: IFlightLocation;
  to: IFlightLocation;
}
