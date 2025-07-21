import {
  Layer,
  Map,
  Marker,
  Source,
  type LayerProps,
  type MapRef,
} from "react-map-gl/maplibre";
import { useFlight } from "../../hooks/useFlight";
import { useEffect, useMemo, useRef } from "react";
import { Dot, MapPin } from "lucide-react";
import { FLIGHTS_DATA } from "../flight/flights.data";
import "maplibre-gl/dist/maplibre-gl.css";
import { createSplitCircle } from "../../utils/sky-track-map-utils";
import { useTheme } from "../../providers/theme/useTheme";

export const solidStyle: LayerProps = {
  id: "route-solid",
  type: "line",
  layout: { "line-cap": "round", "line-join": "round" },
  paint: {
    "line-color": "#F1A326",
    "line-width": 2,
    "line-opacity": 0.8,
  },
};
export const dashedStyle: LayerProps = {
  id: "route-dashed",
  type: "line",
  layout: { "line-cap": "round", "line-join": "round" },
  paint: {
    "line-color": "#5E605F",
    "line-width": 2,
    "line-dasharray": [2, 2],
    "line-opacity": 0.6,
  },
};

export function SkyMap({ data }) {
  const { flight } = useFlight();
  const currentOtherFlightCoordinates = useMemo(
    () =>
      FLIGHTS_DATA.filter((f) => f.id !== flight?.id).map(
        (f) => f.currentLocation.coordinates
      ),
    [flight]
  );
  const ref = useRef<MapRef>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (ref.current && flight) {
      ref.current.setCenter({
        lat: flight.currentLocation.coordinates[0],
        lng: flight.currentLocation.coordinates[1],
      });
      ref.current.setZoom(5);
    }
  }, [flight]);

  const [solidCoords, dashedCoords] = useMemo(() => {
    if (!flight?.from || !flight?.to || !flight?.currentLocation)
      return [[], []];
    const all = [
      [flight.from.coordinates[1], flight.from.coordinates[0]],
      [
        flight.currentLocation.coordinates[1],
        flight.currentLocation.coordinates[0],
      ],
      [flight.to.coordinates[1], flight.to.coordinates[0]],
    ];
    return [all.slice(0, 2), all.slice(1)];
  }, [flight]);

  const { solidFeature, dashedFeature, snappedPoint, bearing } = useMemo(() => {
    if (!flight?.from || !flight?.to || !flight?.currentLocation)
      return {
        solidFeature: null,
        dashedFeature: null,
        snappedPoint: null,
        bearing: 0,
      };
    const from: [number, number] = [
      flight.from.coordinates[1],
      flight.from.coordinates[0],
    ];
    const to: [number, number] = [
      flight.to.coordinates[1],
      flight.to.coordinates[0],
    ];
    const current: [number, number] = [
      flight.currentLocation.coordinates[1],
      flight.currentLocation.coordinates[0],
    ];
    return createSplitCircle(from, to, current);
  }, [flight]);
  return (
    <Map
      ref={ref}
      style={{ width: "100%", height: "100vh" }}
      mapStyle={data}
      initialViewState={{
        latitude: flight?.currentLocation.coordinates[0] || 37.8,
        longitude: flight?.currentLocation.coordinates[0] || -122.4,
        zoom: 5,
      }}
    >
      {solidCoords.length > 1 && solidFeature && (
        <Source
          id="route-solid"
          type="geojson"
          data={{ type: "FeatureCollection", features: [solidFeature] }}
        >
          <Layer {...solidStyle} />
        </Source>
      )}
      {dashedCoords.length > 1 && dashedFeature && (
        <Source
          id="route-dashed"
          type="geojson"
          data={{ type: "FeatureCollection", features: [dashedFeature] }}
        >
          <Layer {...dashedStyle} />
        </Source>
      )}
      {snappedPoint && (
        <Marker latitude={snappedPoint[1]} longitude={snappedPoint[0]}>
          <div
            style={{
              transform: `rotate(${bearing - 90}deg)`,
              transformOrigin: "center",
              transition: "transform 0.3s ease",
              width: "22px",
            }}
          >
            <img src="airplane.png" alt="plane" />
          </div>
        </Marker>
      )}
      {flight?.from.coordinates.length &&
        flight?.from.coordinates.length > 1 && (
          <Marker
            latitude={flight?.from.coordinates[0]}
            longitude={flight?.from.coordinates[1]}
          >
            <Dot size={50} color="#F1A326" style={{ marginBottom: "-5px" }} />
          </Marker>
        )}
      {flight?.to.coordinates.length && flight?.to.coordinates.length > 1 && (
        <Marker
          latitude={flight?.to.coordinates[0]}
          longitude={flight?.to.coordinates[1]}
        >
          <MapPin size={30} color="#F1A326" style={{ paddingBottom: "20px" }} />
        </Marker>
      )}
      {!!currentOtherFlightCoordinates.length &&
        currentOtherFlightCoordinates.map((coordinate) => (
          <Marker
            key={coordinate.join(",")}
            latitude={coordinate[0]}
            longitude={coordinate[1]}
          >
            <div
              style={{
                transform: `rotate(${bearing - 120}deg)`,
                transformOrigin: "center",
                transition: "transform 0.3s ease",
                width: "18px",
                opacity: "0.5",
              }}
            >
              {" "}
              <img src="airplane.png" alt="plane" />
            </div>
          </Marker>
        ))}
    </Map>
  );
}
