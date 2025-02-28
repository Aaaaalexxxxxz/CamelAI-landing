export const Intro = () => {
    return(
        <div className="pt-[200px] flex flex-col gap-y-10">
            <section className="flex flex-col p-8 rounded-lg text-white gap-y-8 items-center">
                <h1 className="text-[60px] font-bold">The AI Data Analyst</h1>
                <h2 className="text-[25px] font-bold">Ask questions, get instant charts and insights from your data.</h2>
                {/* Buttons */}
                <div className="flex flex-row gap-x-4 pt-20"> 
                    <button className="font-bold flex items-center justify-between bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-200 hover:to-pink-200 hover:scale-105 transform transition-all duration-300 ease-in-out">
                            <span>Try Free</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                    </button>
                    <button className="relative font-bold flex items-center justify-between bg-transparent border-2 text-white px-6 py-2 rounded-full group overflow-hidden hover:scale-105 hover:text-black ease-in-out duration-300">
                    <span className="relative z-10">Book Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ml-2 z-20">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    {/* Sliding background element */}
                    <span className="absolute inset-0 bg-opacity-50 bg-gradient-to-r from-blue-300 to-pink-300 transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out z-0"></span>
                    </button>
                </div>
                {/* tags */}
                <div className="flex flex-row gap-x-2 text-[15px] pt-10">
                    <div className="flex flex-row gap-x-2 bg-gray-300 bg-opacity-10 rounded-xl p-2 text-black font-bold"> 
                        <img
                            src="/images/yc-logo.png" 
                            className="w-[20px] h-[20px]"
                            />Y Combinator Backed</div>
                    <div className="flex flex-row gap-x-2 bg-gray-300 bg-opacity-10 rounded-xl p-2 text-black font-bold">
                        <img
                            src="/images/lock-icon.png" 
                            className="w-[20px] h-[20px]"
                            />Enterprise Security</div>
                    <div className="flex flex-row gap-x-2 bg-gray-300 bg-opacity-10 rounded-xl p-2 text-black font-bold">
                        <img
                            src="/images/shield-icon.png" 
                            className="w-[20px] h-[20px]"
                            />100% data privacy</div>
                </div>
            </section>
            <section>
                
            </section>
        </div>
    );
};
