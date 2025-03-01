export const MiniFooter = () => {
  return (
    <div className="content_wrapper py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-x-70">
        <div className="font-bold text-[40px]">
          Get started for{" "}
          <span className="text-5xl font-bold bg-gradient-to-r from-pink-200 to-blue-200 bg-clip-text text-transparent">
            Free
          </span>
        </div>
        <div className="flex flex-row gap-x-2">
          <button className="cursor-pointer font-bold flex items-center justify-between bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-200 hover:to-pink-200 hover:translate-y-[-4px] transform transition-all duration-300 ease-in-out">
            <span>Try Free</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <button className="cursor-pointer relative font-bold flex items-center justify-between bg-transparent border-2 text-white px-6 py-2 rounded-full group overflow-hidden hover:translate-y-[-4px] hover:text-black ease-in-out duration-300">
            <span className="relative z-10">Contact us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 ml-2 z-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              ></path>
            </svg>
            {/* Sliding background element */}
            <span className="absolute inset-0 bg-opacity-50 bg-gradient-to-r from-blue-200 to-pink-200 transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out z-0"></span>
          </button>
        </div>
      </div>
    </div>
  );
};
