import { LatLng, Layer, CircleMarker } from "leaflet";
import { Feature, Point, FeatureCollection } from "geojson";
import { GeoJSON } from "react-leaflet";

import BaseMap from "./BaseMap";
import User from "@/interfaces/User";

const pointStyle = {
  color: "#ff0000",
  weight: 3,
  opacity: 0.9,
  fillOpacity: 0,
};

const PartnersMap = ({ users }: { users: User[] }) => {
  const tooltipOnEachFeature = (feature: Feature, layer: Layer) => {
    layer.bindTooltip(`${feature?.properties?.name}`, { direction: "center" });
  };

  const pointToLayer = (feature: Feature<Point>, latLng: LatLng) =>
    new CircleMarker(latLng);

  // Convert from Markdown-generated array to spec-compliant GeoJSON
  const usersAsFeatures: Feature[] = users.map(({ geometry, ...others }) =>
    Object.assign(
      {},
      {
        type: "Feature" as const,
        properties: {
          ...others,
        },
        geometry: JSON.parse(geometry),
      }
    )
  );

  const usersFeatureCollection: FeatureCollection = {
    type: "FeatureCollection" as const,
    features: usersAsFeatures,
  };

  return (
    <BaseMap>
      <GeoJSON
        data={usersFeatureCollection}
        style={pointStyle}
        onEachFeature={tooltipOnEachFeature}
        pointToLayer={pointToLayer}
      />
    </BaseMap>
  );
};

export default PartnersMap;
