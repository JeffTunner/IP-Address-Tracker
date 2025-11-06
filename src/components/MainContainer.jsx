import SearchBar from "./SearchBar"
import BgMobile from "../assets/pattern-bg-mobile.png";
import BgDesktop from "../assets/pattern-bg-desktop.png";

function MainContainer() {

    return (
        <main className="flex flex-col items-center">
            <div className="relative">
                <img src={BgMobile} alt="Bg-Mobile" 
                className="w-screen "/>
            </div>
            <section className="absolute">
                <h1 className="font-rubik text-white text-2xl font-medium">IP Address Tracker</h1>
                <SearchBar />
            </section>

        </main>
    );
}
export default MainContainer;