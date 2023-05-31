import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <motion.div initial={{ y: -200 }} animate={{ y: 0 }}>
        <img
          src="/LogoStroke.svg"
          alt="Aapelix Logo"
          className="absolute w-24 left-5"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        />
        <h1
          className="absolute left-32 text-6xl top-2 dev sm:text-5xl sm:top-3"
          onClick={handleClick}
        >
          aapelix.dev
        </h1>
        <div className="relative overflow-hidden top-0 h-20 w-full sm:hidden">
          <div className="float-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <a
              href="/index"
              className="float-left p-14 text-center text-3xl no-underline rounded duration-300 hover:-translate-y-3"
            >
              Home
            </a>
            <a
              href="/api"
              className="float-left p-14 text-center text-3xl no-underline rounded duration-300 hover:-translate-y-3"
            >
              Api
            </a>
            <a
              href="/github"
              className="float-left p-14 text-center text-3xl no-underline rounded duration-300 hover:-translate-y-3"
            >
              Github
            </a>
          </div>
        </div>
        <motion.div>
          <div
            className="fixed h-screen w-full left-1/2 -translate-x-1/2 mt-20 list-none text-4xl text-center hidden duration-300 sm:block"
            style={{
              opacity: isActive ? "1" : "0",
            }}
          >
            <li>
              <a href="/index" className="">
                Home
              </a>
            </li>
            <li>
              <a href="/api" className="">
                Api
              </a>
            </li>
            <li>
              <a href="/github" className="">
                Github
              </a>
            </li>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Navbar;
