import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const navigate = useNavigate()
    const position = [-27.78773260320544, -64.25965337777286];

    const [markers, setMarkers] = useState([]);
    const [fallo, setFallo] = useState(
        {
            type: "",
            ubic: {
                lat: "",
                lng: ""
            }
        }
    )

    function MapaClickHandler() {
        useMapEvents({
            click: (e) => {
                const { lat, lng } = e.latlng;
                setMarkers([{ lat, lng }]);
                setFallo({
                    ...fallo,
                    ubic: {
                        lat: lat,
                        lng: lng
                    }
                })
            },
        });
        return null;
    }

    function HandleChange(e) {
        e.preventDefault()

        setFallo({
            ...fallo,
            [e.target.name]: e.target.value
        })
    }

    function HandleSubmit(e) {
        if (fallo.type === "" || fallo.ubic.lng === "") { 
            e.preventDefault()
            alert("Por favor, complete los campos") }
        else {
            alert(`nuevo reporte:${fallo.type} en la ubicacion ${fallo.ubic.lat}, ${fallo.ubic.lng}`)
            navigate('/')
        }
    }


    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Reporte de incidentes</h2>
            <form className="space-y-6" onSubmit={HandleSubmit}>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Tipo de fallo</label>
                    <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        name="type"
                        value={fallo.type}
                        onChange={HandleChange}>
                        <option value="">-</option>
                        <option value="calle">Calle rota</option>
                        <option value="luz">Iluminación</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Ubicación</label>
                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <MapContainer
                                center={position}
                                zoom={14}
                                style={{ height: "400px" }}
                                className="z-0"
                                name="ubic"
                                value={fallo.ubic}
                            >
                                <TileLayer
                                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                                    attribution='&copy; OpenStreetMap contributors'
                                />
                                <MapaClickHandler />
                                {markers.map((marker, index) => (
                                    <Marker key={index} position={[marker.lat, marker.lng]}>
                                        <Popup className="font-sans">
                                            <div className="p-2">
                                                <p className="font-semibold">Marcador</p>
                                                <p className="text-sm text-gray-600">
                                                    Lat: {marker.lat.toFixed(6)}<br />
                                                    Lng: {marker.lng.toFixed(6)}
                                                </p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Enviar reporte
                </button>
            </form>
        </div>
    )
}