"use client";

import React, { useEffect } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface IMapProps {
  center?: number[];
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// Component to handle zoom when center changes
const AutoZoom = ({ center }: { center?: number[] }) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center as L.LatLngExpression, 10);
    }
  }, [center, map]);

  return null;
};
const Map = ({ center }: IMapProps) => {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [51, -0.09]}
      zoom={center ? 10 : 2}
      scrollWheelZoom={true}
      className="min-h-[35vh] rounded-lg"
    >
      <TileLayer attribution={attribution} url={url} />
      {center && <Marker position={center as L.LatLngExpression} />}
      <AutoZoom center={center} />
    </MapContainer>
  );
};

export default Map;
