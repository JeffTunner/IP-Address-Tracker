import { useState } from 'react';
import Arrow from '../assets/icon-arrow.svg'
function SearchBar() {

    const[data, setData] = useState(null);
    const[input, setInput] = useState("");

    async function generateInfo() {
        const apiKey = import.meta.env.VITE_API_KEY;
        let url = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${input}`;
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        console.log(result);
    }

    function handleInput(e) {
        setInput(e.target.value);
    }

    return(
        <div className='flex'>
            <input type="text"
            value={input} 
            onChange={(e) => handleInput(e)}
            placeholder="Search for any IP address or domain" 
            className='px-6 py-4 border-darkGray text-input font-rubik text-gray shadow-2xl bg-white rounded-l-2xl'
            />
            <button 
            onClick={generateInfo}
            className='bg-black px-6 py-4 rounded-r-2xl cursor-pointer hover:bg-darkGray transition-all ease-in-out'>
                <img src={Arrow} alt="Arrow" />
            </button>
        </div>
    );
}
export default SearchBar;