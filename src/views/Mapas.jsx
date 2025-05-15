import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix para los íconos en producción
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapaInteractivo() {
    const position = [-27.78773260320544, -64.25965337777286];

    const [markers, setMarkers] = useState([]);

    function MapaClickHandler() {
        useMapEvents({
            click: (e) => {
                const { lat, lng } = e.latlng;
                setMarkers([{ lat, lng }]);
            },
        });
        return null;
    }
    

    return (<div>
        <MapContainer center={position} zoom={13} style={{ height: "500px" }}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            <MapaClickHandler />

            {/* Renderizar marcadores */}
            {markers.map((marker, index) => (
                <Marker key={index} position={[marker.lat, marker.lng]}>
                    <Popup>Marcador {index + 1} <br /> Lat: {marker.lat.toFixed(4)}, Lng: {marker.lng.toFixed(4)}</Popup>
                </Marker>
            ))}

        </MapContainer>
        
        {markers && markers.map(obj=>(`lat:${obj.lat} long:${obj.lng}`))}
        
        </div>
    );
}