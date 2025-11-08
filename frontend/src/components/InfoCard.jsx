import { useContext } from "react";
import { useGeolocation } from "../context/IPGeolocationContext.jsx";

function InfoCard() {

    const{ipAddress, location, timezone, isp} = useGeolocation();

    return(
        <section className="grid grid-cols-1 md:grid-cols-4 md:gap-2 gap-5 md:text-left text-center shadow-2xl p-4 rounded-xl w-full bg-white max-w-6xl mx-auto">
            
            <div className="font-rubik md:text-left md:border-r md:border-gray md:p-6 md:flex md:flex-col md:gap-3">
                <h1 className="text-[12px] md:text-sm text-gray font-medium">IP ADDRESS</h1>
                <p className="text-xl md:text-2xl font-medium">{ipAddress || `192.212.174.101`} </p>
            </div>

            <div className="font-rubik md:text-left md:border-r md:border-gray md:p-6 md:flex md:flex-col md:gap-3">
                <h1 className="text-[12px] md:text-sm text-gray font-medium">LOCATION</h1>
                <p className="text-xl md:text-2xl font-medium">{location || `Brooklyn, NY 10001`}</p>
            </div>

            <div className="font-rubik md:text-left md:border-r md:border-gray md:p-6 md:flex md:flex-col md:gap-3">
                <h1 className="text-[12px] md:text-sm text-gray font-medium">TIMEZONE</h1>
                <p className="text-xl md:text-2xl font-medium">{timezone || `UTC-05:00`}</p>
            </div>

            <div className="font-rubik md:text-left  md:p-6">
                <h1 className="text-[12px] md:text-sm text-gray font-medium md:flex md:flex-col md:gap-3">ISP</h1>
                <p className="text-xl md:text-2xl font-medium">{isp || `SpaceX Starlink`}</p>
            </div>

        </section>
    );
}
export default InfoCard;