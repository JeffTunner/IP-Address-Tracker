import { createContext, useContext, useState } from "react";

const IPGeolocationContext = createContext();

export function IPGeolocationProvider({children}) {

    const[data, setData] = useState(null);
    const[ipAddress, setIpAddress] = useState("");
    const[location, setLocation] = useState("");
    const[timezone, setTimezone] = useState("");
    const[isp, setIsp] = useState("");

    const apiKey = import.meta.env.VITE_API_KEY;

    async function fetchGeolocationData(IPAddress) {
        let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${IPAddress}`;
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setIpAddress(result.ip);
        setLocation(`${result.location.region}, ${result.location.country} ${result.location.postalCode}`);
        setTimezone(`UTC ${result.location.timezone}`);
        setIsp(result.isp);
        console.log(result);
    }

    return(
        <IPGeolocationContext.Provider 
        value={{data, fetchGeolocationData, ipAddress, location, timezone, isp}}
        >
            {children}
        </IPGeolocationContext.Provider>
    );
}

export function useGeolocation() {
    const ctx = useContext(IPGeolocationContext);
    if(!ctx) throw new Error("error");
    return ctx;
}