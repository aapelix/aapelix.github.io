function Bottom() {
  return (
    <>
      <div className=" bg-gradient-to-t from-[#191919] to-[#2b2b2b] h-40 w-full absolute top-[calc(100%+740px)]">
        <img
          src="/LogoStroke.svg"
          alt="Aapelix Logo"
          className="absolute w-24 right-5 top-10"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        />
        <h1
          className="absolute right-32 text-6xl top-10 dev sm:text-5xl sm:top-14"
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
        <div className="absolute top-0 flex text-center left-1/2 -translate-x-1/2 pt-10">
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
