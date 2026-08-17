"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Map = () => {
    return (
        <MapContainer
            center={[-5.4, 105.3]}
            zoom={13}
            style={{ height: "100vh", width: "100vw" }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-5.4, 105.3]}>
                <Popup>Hello!</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;