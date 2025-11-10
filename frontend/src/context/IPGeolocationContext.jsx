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
        let url = `http://localhost:8080/api/ip?ip=${IPAddress}`;
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setIpAddress(result.ip);
        setLocation(`${result.location.region}, ${result.location.country} ${result.location.postalCode}`);
        setTimezone(`UTC ${result.location.timezone}`);
        setIsp(result.isp);
        setLat(result.location.lat);
        setLon(result.location.lng);
    }

    useEffect(() => {
    async function fetchUserIP() {
        const res = await fetch("http://localhost:8080/api/ip/myself");
        const data = await res.json();
        fetchGeolocationData(data.ip);
    }
    fetchUserIP();
    }, []);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
        setHistory(storedHistory);
    },[]);

    useEffect(() => {
        if(ipAddress) {
            setHistory((prev) => {
                const updated = [ipAddress, ...prev.filter((i) => i!== ipAddress)].slice(0,5);
                localStorage.setItem("searchHistory", JSON.stringify(updated));
                return updated;
            })
        }
    },[ipAddress]);

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