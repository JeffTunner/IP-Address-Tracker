import { useContext } from "react";
import { useGeolocation } from "../context/IPGeolocationContext.jsx";

function InfoCard() {

    const{ipAddress, location, timezone, isp} = useGeolocation();

    return(
        <section className="flex flex-col items-center gap-4 shadow-2xl py-7 px-4 rounded-xl w-full bg-white">
            <div className="flex flex-col items-center gap-1.5 font-rubik">
                <h1 className="text-[12px] text-gray font-bold">IP ADDRESS</h1>
                <p className="text-xl font-medium">{ipAddress || `192.212.174.101`} </p>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-[12px] text-gray font-bold">LOCATION</h1>
                <p className="text-xl font-medium">{location || `Brooklyn, NY 10001`}</p>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-[12px] text-gray font-bold">TIMEZONE</h1>
                <p className="text-xl font-medium">{timezone || `UTC-05:00`}</p>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-[12px] text-gray font-bold">ISP</h1>
                <p className="text-xl font-medium">{isp || `SpaceX Starlink`}</p>
            </div>
        </section>
    );
}
export default InfoCard;