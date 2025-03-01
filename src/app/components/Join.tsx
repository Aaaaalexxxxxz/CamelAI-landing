export const Join = () => {
    return(
        <section className="flex flex-row p-20 justify-between gap-x-60">
            {/*left side content*/}
            <div className="flex flex-col gap-y-10">
                <h1 className="text-[40px]">Want to build with camelAI?</h1>
                <h2 className="text-[20px] font-bold">Embed AI-powered analytics directly in your application with our API</h2>
                <button className="font-bold flex items-center justify-between bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-200 hover:to-pink-200 hover:translate-y-[-4px] transform transition-all duration-300 ease-in-out">
                            <span>Try Free</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                </button>
            </div>
            {/*right side content*/}
            <div className="flex flex-col gap-y-4px">
                <div>
                    <h1>Natural Language → SQL</h1>
                    <p>Same powerful query engine that powers camelAI</p>
                </div>
            </div>
        </section>
    );
}