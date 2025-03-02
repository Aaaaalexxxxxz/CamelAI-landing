import Image from "next/image";
export const Intro = () => {
  return (
    <div className="flex flex-col gap-y-10 w-full bg-gradient-to-r from-blue-900 to-pink-900">
      <section className="pt-[160px] flex flex-col p-8 rounded-lg text-white gap-y-8 items-center z-2">
        <h1 className="text-[60px] font-bold">The AI Data Analyst</h1>
        <h2 className="text-[25px] font-bold">
          Ask questions, get instant charts and insights from your data.
        </h2>
        {/* Buttons */}
        <div className="flex flex-row gap-x-4 pt-20">
          <button className="button_white">
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
            <span className="relative z-10">Book Demo</span>
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
        {/* tags */}
        <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2 text-[15px] pt-10">
          <div className="flex flex-row gap-x-2 bg-gray-300/40 bg-opacity-0 rounded-xl p-2 text-black font-bold">
            <Image className="intro_icons"
            src="/images/yc-logo.png" alt="" width={20} height={20} />Y
            Combinator Backed
          </div>
          <div className="flex flex-row gap-x-2 bg-gray-300/40 bg-opacity-10 rounded-xl p-2 text-black font-bold">
          <Image src="/images/lock-icon.png" alt="" width={20} height={20} />
            Enterprise Security
          </div>
          <div className="flex flex-row gap-x-2 bg-gray-300/40 bg-opacity-10 rounded-xl p-2 text-black font-bold">
            <Image
              src="/images/shield-icon.png"
              alt=""
              width={20}
              height={20}
            />
            100% data privacy
          </div>
        </div>
      </section>
      <section className="items-center z-2">
        <div className="flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-4xl object-cover w-240 pb-[25px]"
          >
            <source src="/images/RickRoll.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
};
