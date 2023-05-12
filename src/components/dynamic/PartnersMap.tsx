import { LatLng, Layer, CircleMarker } from "leaflet";
import { Feature, FeatureCollection, Point } from "geojson";
import { FC } from "react";
import { GeoJSON } from "react-leaflet";

import BaseMap from "./BaseMap";

const partnersData: FeatureCollection = require("public/geospatial/partnersDataDemo.json");
const pointStyle = {
  color: "#ff0000",
  weight: 3,
  opacity: 0.9,
  fillOpacity: 0,
};

const PartnersMap: FC = () => {
  const tooltipOnEachFeature = (feature: Feature<Point>, layer: Layer) => {
    layer.bindTooltip(`${feature?.properties?.name}`, { direction: "center" });
  };

  const pointToLayer = (feature: Feature<Point>, latLng: LatLng) =>
    new CircleMarker(latLng);

  return (
    <BaseMap>
      <GeoJSON
        data={partnersData}
        style={pointStyle}
        onEachFeature={tooltipOnEachFeature}
        pointToLayer={pointToLayer}
      />
    </BaseMap>
  );
};

export default PartnersMap;
