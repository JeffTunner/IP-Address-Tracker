import SearchBar from "./SearchBar"
import BgMobile from "../assets/pattern-bg-mobile.png";
import BgDesktop from "../assets/pattern-bg-desktop.png";
import InfoCard from "./InfoCard";
import { useGeolocation } from "../context/IPGeolocationContext.jsx";
import Map from "./Map.jsx";
import { useEffect, useState } from "react";

function MainContainer() {

    const[bgImg, setBgImg] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setBgImg(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);

    return (
        <main className="flex flex-col items-center h-screen">
            <div className="absolute w-full -z-10">
                <div>
                    { bgImg < 768 ? (
                        <img src={BgMobile} alt="Bg-Mobile" 
                    className="w-full"/>) : (<img src={BgDesktop} alt="Bg-Desktop" className="w-full"/>)}
                </div>
            <div>
                <Map />
            </div>
            </div>
            <section className="flex flex-col gap-5 absolute mt-10 mx-7 items-center z-50">
                <h1 className="font-rubik text-white text-2xl font-medium">IP Address Tracker</h1>
                <SearchBar />
                <InfoCard />
            </section>
            
        </main>
    );
}
export default MainContainer;