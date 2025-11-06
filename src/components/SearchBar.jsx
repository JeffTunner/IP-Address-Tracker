import Arrow from '../assets/icon-arrow.svg'
function SearchBar() {

    return(
        <div className='flex'>
            <input type="text" 
            placeholder="Search for any IP address or domain" 
            className='px-6 py-4 border-darkGray text-input font-rubik text-gray shadow-2xl bg-white rounded-l-2xl'
            />
            <button className='bg-black px-6 py-4 rounded-r-2xl cursor-pointer hover:bg-darkGray transition-all ease-in-out'>
                <img src={Arrow} alt="Arrow" />
            </button>
        </div>
    );
}
export default SearchBar;