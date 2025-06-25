export interface IFlight {
  icon: string;
  model: string;
  number: number;
  id: string;
  cityStart: string;
  cityEnd: string;
  cityStartShort: string;
  cityEndShort: string;
}

export const flightData = [
  {
    icon: "#BB312D",
    model: "TK143",
    number: 93247,
    id: "TC-JFP",
    cityStart: "Sofia",
    cityEnd: "Beijing",
    cityStartShort: "SOF",
    cityEndShort: "PEK",
  },
  {
    icon: "#07338F",
    model: "RN1782",
    number: 7842,
    id: "D-AJFP",
    cityStart: "Dublin",
    cityEnd: "Larnaca",
    cityStartShort: "DUB",
    cityEndShort: "LCA",
  },
  {
    icon: "#C3D500",
    model: "S7124",
    number: 88015,
    id: "RA-73415",
    cityStart: "Nice",
    cityEnd: "Tbilisi",
    cityStartShort: "NCE",
    cityEndShort: "TBS",
  },
  {
    icon: "#F4821F",
    model: "LX318",
    number: 94102,
    id: "HB-JHK",
    cityStart: "Porto",
    cityEnd: "Baky",
    cityStartShort: "OPO",
    cityEndShort: "GYD",
  },
];
