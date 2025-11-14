import { createContext, useContext, useEffect, useState } from "react";

const IPGeolocationContext = createContext();

export function IPGeolocationProvider({children}) {

    const[data, setData] = useState(null);
    const[ipAddress, setIpAddress] = useState("");
    const[location, setLocation] = useState("");
    const[timezone, setTimezone] = useState("");
    const[isp, setIsp] = useState("");
    const[lat, setLat] = useState("");
    const[lon, setLon] = useState("");
    const[size, setSize] = useState(window.innerWidth);
    const[history, setHistory] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);

    const apiKey = import.meta.env.VITE_API_KEY;

    async function fetchGeolocationData(IPAddress) {
        try {
        const response = await fetch(`https://tracker-backend-o7sg.onrender.com/api/ip?ip=${IPAddress}`);
        const result = await response.json();

        if (result.error) {
        console.error(result.message);
        setData(null);
        return;
        }

        setData(result);
        setIpAddress(result.ip);
        if (result.location) {
        setLocation(`${result.location.region}, ${result.location.country} ${result.location.postalCode}`);
        setTimezone(`UTC ${result.location.timezone}`);
        setLat(result.location.lat);
        setLon(result.location.lng);
        } else {
        console.error("Error: Location data is unavailable.");
        setLocation(null);
        setTimezone(null);
        }
        setIsp(result.isp);
        } catch (error) {
        console.error("Fetch failed:", error);
        }
    }

    useEffect(() => {
    async function fetchUserIP() {
        const res = await fetch("https://tracker-backend-o7sg.onrender.com/api/ip/myself");
        const data = await res.json();
        fetchGeolocationData(data.ip);
    }
    fetchUserIP();
    }, []);

    useEffect(() => {
        fetchRecentSearches();
    },[]);

    async function fetchRecentSearches() {
        const res = await fetch("https://tracker-backend-o7sg.onrender.com/api/ip/history");
        const data = await res.json();
        setHistory(data);
    }

    return(
        <IPGeolocationContext.Provider 
        value={{data, fetchGeolocationData, ipAddress, location, timezone, isp, lat, lon, size, history}}
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