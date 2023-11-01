import { MapContainer, TileLayer, Marker } from 'react-leaflet';

export const Map = ({ lat, lon }) => {
  const position = [lat, lon]; // Use the provided latitude and longitude

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        {/* You can add custom markers or popups here */}
      </Marker>
    </MapContainer>
  );
};
