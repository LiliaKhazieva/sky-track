import {
  bearing,
  greatCircle,
  lineString,
  nearestPointOnLine,
  point,
} from "@turf/turf";

export const createSplitCircle = (
  from: [number, number],
  to: [number, number],
  current: [number, number]
) => {
  const fullLine = greatCircle(point(from), point(to), { npoints: 128 });
  const coords = fullLine.geometry.coordinates;

  const currentPount = point(current);
  const snapped = nearestPointOnLine(fullLine, currentPount, {
    units: "kilometers",
  });

  const index = snapped.properties?.index ?? 0;
  const snappedCoord = snapped.geometry.coordinates as [number, number];
  const nextCoord = coords[Math.min(index + 1, coords.length - 1)] as [
    number,
    number
  ];
  const prevCoord = coords[Math.max(index - 1, 0)] as [number, number];

  const BACK_SHIFT_RATIO = 0.47;
  const offsetPoint: [number, number] = [
    snappedCoord[0] * (1 - BACK_SHIFT_RATIO) + prevCoord[0] * BACK_SHIFT_RATIO,
    snappedCoord[1] * (1 - BACK_SHIFT_RATIO) + prevCoord[1] * BACK_SHIFT_RATIO,
  ];
  return {
    solidFeature: lineString(coords.slice(0, index + 1) as [number, number][]),
    dashedFeature: lineString(coords.slice(index) as [number, number][]),
    snappedPoint: offsetPoint,
    bearing: bearing(snappedCoord, nextCoord),
  };
};
