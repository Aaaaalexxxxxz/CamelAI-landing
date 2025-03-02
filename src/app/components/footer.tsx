import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-black-800 text-white pt-10 pb-2 z-1 bg-black container mx-auto flex flex-col">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-x-70">
        {/* Left section: text */}
        <div className="flex flex-col">
          <Image
            src="/images/footerpic.png"
            alt="Camel"
            width={300}
            height={30}
          />
          <p className="font-bold my-4 text-base">
            Subscribe to our newsletter for product updates
          </p>
          <div className="flex gap-x-2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="bg-black text-white p-2 rounded-full border-2 border-white-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
            ></input>
            <button className="button_white">
              <span className="font-bold">Subscribe</span>
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
          </div>
          <div className="flex gap-x-2 mt-20 mr-0 mb-7 ml-0">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r p-2"
            >
              <Image src="/images/X.png" alt="Twitter" width={8} height={8}/>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r p-2"
            >
             <Image src="/images/discord.png" alt="discord" width={8} height={8} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r p-2"
            >
             <Image src="/images/linkedin.png" alt="Linkedin" width={8} height={8} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r p-2"
            >
              <Image src="/images/Youtube.png" alt="Youtube" width={8} height={8} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r p-2"
            >
              <Image src="/images/github.png" alt="Github" width={8} height={8} />
            </a>
          </div>
        </div>

        {/* Right section: links */}
        <div className="flex gap-x-4 text-sm">
          <div className="flex flex-col gap-y-10">
            <p className="text-gray-500 font-bold">Company</p>
            <a className="font-bold">About us</a>
            <a className="font-bold">Schedule a call</a>
            <a className="font-bold">Email us</a>
          </div>
          <div className="flex flex-col gap-y-10">
            <p className="text-gray-500 font-bold">Links</p>
            <a className="font-bold">Data source</a>
            <a className="font-bold">Demo Videos</a>
            <a className="font-bold">Blogs</a>
            <a className="font-bold">Product hunt</a>
          </div>
          <div className="flex flex-col gap-y-10">
            <p className="text-gray-500 font-bold">Legal</p>
            <a className="font-bold">Terms</a>
            <a className="font-bold">Privacy Policy</a>
            <a className="font-bold">Security</a>
            <a className="font-bold">Acceptable Use</a>
          </div>
        </div>
      </div>
      <div
        id="footer-bottom"
        className="border-t-2 border-gray-100 mb-2 mt-2 mx-0"
      >
        <p className="text-xs text-gray-100">
          © 2024 camelQA (DBA camelAI) | All rights reserved
        </p>
      </div>
    </footer>
  );
};
