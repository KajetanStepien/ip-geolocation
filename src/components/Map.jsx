import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useEffect } from "react";

function ChangeView({ center }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, 13, {
      animate: true,
      duration: 1,
    });
  }, [center]);
  return null;
}

export function Map({ xyz }) {
  return (
    <MapContainer
      center={xyz}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={xyz}></Marker>
      <ChangeView center={xyz} />
    </MapContainer>
  );
}
