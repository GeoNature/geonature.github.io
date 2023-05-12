import { FC, PropsWithChildren } from "react";
import { LatLngBounds, latLng, latLngBounds } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const DEFAULT_BOUNDS = latLngBounds(
  latLng(41.364, -4.79),
  latLng(51.091, 9.562)
); // Metropolitan France (approx)

const HEIGHT = "640px";
const MIN_ZOOM = 6;
const MAX_ZOOM = 16;

const BaseMap: FC<PropsWithChildren<{ bounds?: LatLngBounds }>> = ({
  bounds,
  children,
}) => {
  return (
    <div className="Map" style={{ height: HEIGHT }}>
      <MapContainer
        minZoom={MIN_ZOOM}
        maxZoom={MAX_ZOOM}
        bounds={bounds ? bounds : DEFAULT_BOUNDS}
        style={{ height: "100%", width: "100%" }}
      >
        {children}
        <TileLayer
          attribution="OpenStreetMap France, OpenStreetMap contributors"
          maxZoom={14}
          url={`https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png`}
        />
      </MapContainer>
    </div>
  );
};

export default BaseMap;
