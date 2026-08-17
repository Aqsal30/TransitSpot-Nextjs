"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Coba() {
    return (
        <div className="w-full h-dvh">
            <MapContainer
                center={[-5.4, 105.3]}
                zoom={13}
                style={{ height: "400px", width: "100%" }}
                >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[-5.4, 105.3]}>
                    <Popup>Hello!</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}