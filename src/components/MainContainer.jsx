import SearchBar from "./SearchBar"
import BgMobile from "../assets/pattern-bg-mobile.png";
import BgDesktop from "../assets/pattern-bg-desktop.png";
import InfoCard from "./InfoCard";
import { useGeolocation } from "../context/IPGeolocationContext.jsx";
import Map from "./Map.jsx";
import { useEffect, useState } from "react";
import SearchHistory from "./SearchHistory.jsx";

function MainContainer() {

    const{size} = useGeolocation();

    return (
        <main className="flex flex-col items-center h-screen">
            <div className="absolute w-full -z-10">
                <div>
                    { size < 768 ? (
                        <img src={BgMobile} alt="Bg-Mobile" 
                    className="w-full h-80"/>) : (<img src={BgDesktop} alt="Bg-Desktop" className="w-full h-80"/>)}
                </div>
            <div>
                <Map />
            </div>
            </div>
            <section className="flex flex-col gap-5 md:gap-8 absolute mt-10 mx-7 items-center z-50">
                <h1 className="font-rubik text-white text-2xl md:text-3xl font-medium text-center">IP Address Tracker</h1>
                <SearchBar />
                <InfoCard />
                <SearchHistory />
            </section>
            
        </main>
    );
}
export default MainContainer;