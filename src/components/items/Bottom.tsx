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
          <h1 className="left-1/2 -translate-x-1/2 bottom-36 absolute text-2xl text-center sm:text-2xl sm:bottom-28 text-gray-400">
            Copyright © 2023 Aapelix
          </h1>
        </div>
        <img
          src="/logo.png"
          alt="AAPELIX"
          className="w-max h-14 object-cover top-16 absolute left-1/2 -translate-x-1/2"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        />
      </div>
    </>
  );
}

export default Bottom;
