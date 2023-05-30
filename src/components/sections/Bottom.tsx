function Bottom() {
  return (
    <>
      <div className="absolute -bottom-[calc(100%-170px)] left-0 w-full overflow-hidden leading-none sm:-bottom-[calc(100%+70px)]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(113%+1.3px)] h-36"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-[#0f172A]"
          ></path>
        </svg>
      </div>
      <div className="bg-[#0f172A] h-40">
        <img
          src="/LogoStroke.svg"
          alt="Aapelix Logo"
          className="absolute w-24 right-5 top-[calc(100%+770px)] sm:top-[calc(100%+890px)]"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        />
        <h1
          className="absolute right-32 text-6xl top-[calc(100%+770px)] dev sm:top-[calc(100%+890px)]"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          aapelix.dev
        </h1>
        <div className="absolute top-[calc(100%+770px)] flex text-center left-1/2 -translate-x-1/2 pb-10">
          <ul className="pl-6 pr-6 text-3xl border-r-2 border-gray-400 sm:hidden">
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              GitHub
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              YouTube
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              Twitter
            </li>
          </ul>
          <ul className="pl-6 pr-6 text-3xl border-r-2 border-gray-400 sm:hidden">
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              GitHub
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              YouTube
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              Twitter
            </li>
          </ul>
          <ul className="pl-6 pr-6 text-3xl border-r-2 border-gray-400 sm:hidden">
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              GitHub
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              YouTube
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              Twitter
            </li>
          </ul>
          <ul className="pl-6 pr-6 text-3xl sm:hidden">
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              GitHub
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              YouTube
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              Twitter
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Bottom;
