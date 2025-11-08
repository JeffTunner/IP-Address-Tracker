import { useGeolocation } from "../context/IPGeolocationContext.jsx";

function SearchHistory() {

    const{history, fetchGeolocationData} = useGeolocation();

    return(
        <section className="bg-white shadow-xl rounded-xl p-4 mt-4 w-full max-w-lg">
            <h1 className="text-lg font-semibold mb-2 text-darkGray text-center">Recent Searches</h1>
            <ul className="flex flex-wrap gap-2">
                {history && history.map((item, i) => (
                    <li 
                    key={i}
                    onClick={() => fetchGeolocationData(item)}
                    className="cursor-pointer bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 transition">
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );

}
export default SearchHistory;