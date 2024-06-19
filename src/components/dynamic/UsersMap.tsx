import { LatLng, Layer, CircleMarker } from "leaflet";
import { Feature, Point, FeatureCollection } from "geojson";
import { GeoJSON } from "react-leaflet";

import BaseMap from "./BaseMap";
import User from "@/interfaces/User";

const userGeometries: FeatureCollection = require("public/geospatial/userGeometries.json");

const featureStyle = {
  color: "#0000ff",
  weight: 2,
  opacity: 0.9,
  fillOpacity: 0.3,
};

// Look up the geometry in the GeoJSON based on 'feature.properties.name'
const getGeometry = (geometryName: string) =>
  userGeometries.features.filter(
    (feature) => feature?.properties?.name === geometryName
  )[0].geometry;

const UsersMap = ({ users }: { users: User[] }) => {
  const tooltipOnEachFeature = (feature: Feature, layer: Layer) => {
    layer.bindTooltip(
      `${feature?.properties?.name} (${feature?.properties?.type})`,
      { direction: "center" }
    );
  };

  const pointToLayer = (feature: Feature<Point>, latLng: LatLng) =>
    new CircleMarker(latLng);

  // Combine data from markdown files with geospatial information in GeoJSON
  const usersAsFeatures: Feature[] = users
    .filter((user) => !!user.geometryName)
    .map(({ geometryName, ...others }) =>
      Object.assign(
        {},
        {
          type: "Feature" as const,
          properties: {
            ...others,
          },
          geometry: getGeometry(geometryName),
        }
      )
    );

  const usersFeatureCollection: FeatureCollection = {
    type: "FeatureCollection" as const,
    features: usersAsFeatures,
  };
  console.log("LAAAAA");
  console.log(JSON.stringify(usersFeatureCollection))

  return (
    <BaseMap>
      <GeoJSON
        data={usersFeatureCollection}
        style={featureStyle}
        onEachFeature={tooltipOnEachFeature}
        pointToLayer={pointToLayer}
      />
    </BaseMap>
  );
};

export default UsersMap;
