import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGeolocation } from "../context/IPGeolocationContext.jsx";

function Map() {

    const{lat, lon} = useGeolocation();

    return(
        <MapContainer
            center={[lat, lon]}
            zoom={13}
            style={{height: "400px", width: "100%"}}>
            
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[lat, lon]}>
                <Popup>Your Location</Popup>
            </Marker>

        </MapContainer>
    );
}
export default Map;