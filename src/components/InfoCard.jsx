
function InfoCard() {

    return(
        <section className="flex flex-col items-center gap-4 shadow-2xl py-7 rounded-xl w-full bg-white">
            <div className="flex flex-col items-center gap-1.5 font-rubik">
                <h1 className="text-[12px] text-gray font-bold">IP ADDRESS</h1>
                <p className="text-xl font-medium">192.212.174.101</p>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-[12px] text-gray font-bold">LOCATION</h1>
                <p className="text-xl font-medium">Brooklyn, NY 10001</p>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-[12px] text-gray font-bold">TIMEZONE</h1>
                <p className="text-xl font-medium">UTC-05:00</p>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-[12px] text-gray font-bold">ISP</h1>
                <p className="text-xl font-medium">SpaceX Starlink</p>
            </div>
        </section>
    );
}
export default InfoCard;