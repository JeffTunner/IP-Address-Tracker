import SearchBar from "./SearchBar"
import BgMobile from "../assets/pattern-bg-mobile.png";
import BgDesktop from "../assets/pattern-bg-desktop.png";
import InfoCard from "./InfoCard";

function MainContainer() {

    return (
        <main className="flex flex-col items-center h-screen">
            {<div className="relative">
                <img src={BgMobile} alt="Bg-Mobile" 
                className="w-screen "/>
            </div>}
            <section className="flex flex-col gap-5 absolute mt-10 items-center">
                <h1 className="font-rubik text-white text-2xl font-medium">IP Address Tracker</h1>
                <SearchBar />
                <InfoCard />
            </section>

        </main>
    );
}
export default MainContainer;