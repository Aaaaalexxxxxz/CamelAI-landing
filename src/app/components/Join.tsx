export const Join = () => {
  return (
    <div className="content_wrapper py-20">
      <section className="container flex flex-col mx-20 md:flex-row gap-y-30 justify-between items-center">
        {/*left side content*/}
        <div className="flex flex-col gap-y-10 text-center px-20 md:text-left md:justify-start justify-center">
  <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-2xl">
    Want to build with CamelAI?
  </h1>
  <h2 className="lg:text-2xl md:text-2xl sm:text-xl text-xl">
    Embed AI-powered analytics directly in your application with our API
  </h2>
  <div className="flex w-full md:justify-start justify-center">  {/* Flex container for the button */}
    <button className="button_white justify-center">
      <span>Join API Waitlist</span>
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
</div>

        {/*right side content*/}
        <div className="flex flex-col gap-y-8">
          <div>
            <h2>Natural Language → SQL</h2>
            <p className="text-gray-500">
              Same powerful query engine that powers CamelAI
            </p>
          </div>
          <div>
            <h2>Secure Integration</h2>
            <p className="text-gray-500">
              Enterprise-grade security and permissions
            </p>
          </div>
          <div>
            <h2>Flexible Integration</h2>
            <p className="text-gray-500">
              Full control over the user experience
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
