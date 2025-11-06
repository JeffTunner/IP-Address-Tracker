import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGeolocation } from "../context/IPGeolocationContext.jsx";
import markerIcon from "../assets/icon-location.svg";
import { marker } from "leaflet";
import L from "leaflet";

function Map() {

    const{lat, lon} = useGeolocation();

    if (!lat || !lon) {
        return <p>Loading map...</p>;
    }

    const customIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [32,32],
        iconAnchor: [16,32]
    });

    return(
        <MapContainer
            center={[lat, lon]}
            zoom={13}
            style={{height: "100vh", width: "100%"}}>
            
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker icon={customIcon} position={[lat, lon]}>
                <Popup>Your Location</Popup>
            </Marker>

        </MapContainer>
    );
}
export default Map;