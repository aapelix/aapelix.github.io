import { useState } from "react";

function Bottom() {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className=" bg-gradient-to-t from-[#191919] to-[#2b2b2b] h-44 w-full absolute top-[calc(100%+740px)]">
        <div className="flex">
          <h1 className="left-1/2 -translate-x-1/2 bottom-44 absolute text-3xl text-center sm:text-2xl text-gray-400">
            Found a{" "}
            <span
              className="text-gray-300"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              onClick={() => setIsShown((current) => !current)}
            >
              bug?
            </span>{" "}
            <a
              href="https://github.com/aapelix/aapelix.github.io"
              className="hover:text-gray-700 duration-300"
            >
              Report it on GitHub!
            </a>
            {isShown && (
              <img
                src="/bug.png"
                alt=""
                className="absolute w-36 h-36 object-contain -bottom-8 left-12 sm:botton-8"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => setIsShown((current) => !current)}
              />
            )}
          </h1>
          <h1 className="left-1/2 -translate-x-1/2 bottom-36 absolute text-3xl text-center sm:text-2xl sm:bottom-28 text-gray-400">
            Need help?{" "}
            <a
              href="mailto:hello@aapelix.dev"
              className="hover:text-gray-700 duration-300"
            >
              Email me
            </a>
          </h1>
        </div>
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
              <a href="">GitHub</a>
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              <a href="">YouTube</a>
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              <a href="">Twitter</a>
            </li>
          </ul>
          <ul className="pl-6 pr-6 text-3xl border-r-2 border-gray-400 sm:hidden">
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              <a href="">Discord</a>
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              <a href="">Projects</a>
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              <a href="">soon™</a>
            </li>
          </ul>
          <ul className="pl-6 pr-6 text-3xl sm:hidden">
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              <a href="">soon™</a>
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              <a href="">soon™</a>
            </li>
            <li className="text-gray-400 duration-300 hover:text-gray-700">
              <a href="">soon™</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Bottom;
