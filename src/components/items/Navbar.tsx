import { useState } from "react";
import Logo from "/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEllipsisV, faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import Logo_sm from "/logo-sm.png";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const showSearch = () => {
    const search = document.querySelector(".searcharea");
    search?.classList.add("visible");
  };

  const menu = () => {
    document.body.classList.toggle("scroll");
    setIsActive(!isActive);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-28 absolute -top-6 w-full">
      <div
        className="absolute -translate-x-1/2 h-screen bg-black w-screen lg:hidden overflow-hidden duration-300 text-5xl"
        style={{
          left: isActive ? "50%" : "-50%",
          overflow: "hidden",
        }}
      >
        <ul className="absolute top-1/3 left-1/2 -translate-x-1/2">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Account</a>
          </li>
          <li>
            <a href="https://argonium.net">Argonium</a>
          </li>
          <li className="absolute left-1/2 -translate-x-1/2 w-max mt-4">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            <FontAwesomeIcon icon={faDiscord} className="ml-2" />
            <FontAwesomeIcon
              icon={faSearch}
              className="ml-2"
              onClick={showSearch}
            />
          </li>
        </ul>
      </div>
      <img
        src={Logo}
        alt="AAPELIX"
        className="absolute w-max h-14 object-cover left-1/4 top-10 sm:left-8 sm:hidden"
      />
      <img
        src={Logo_sm}
        alt="AAPELIX"
        className="absolute w-max h-14 object-cover left-1/4 top-10 sm:left-8 lg:hidden"
      />
      <FontAwesomeIcon
        icon={faEllipsisV}
        className="absolute right-2 top-10 w-14 h-14 duration-300 lg:hidden"
        style={{
          transform: isActive ? "rotate(-45deg)" : "rotate(0)",
        }}
        onClick={menu}
      />
      <FontAwesomeIcon
        icon={faEllipsisV}
        className="absolute right-2 top-10 w-14 h-14 duration-300 lg:hidden"
        style={{
          transform: isActive ? "rotate(45deg)" : "rotate(0)",
        }}
        onClick={menu}
      />

      <div className="absolute left-1/2 -translate-x-1/2 text-xl top-6">
        <div className="absolute left-1/4 top-6 translate-x-1/2 sm:hidden text-gray-400 w-max">
          <a
            href="/"
            className="pl-4 pr-4 rounded border-transparent duration-300 pt-1 pb-1 hover:pb-3 hover:pt-3 hover:bg-[#464c4e] hover:duration-200 hover:text-white focus:bg-slate-600"
          >
            Home
          </a>
          <a
            href="/login"
            className="pl-4 pr-4 rounded border-transparent duration-300 pt-1 pb-1 hover:pb-3 hover:pt-3 hover:bg-[#464c4e] hover:duration-200 hover:text-white focus:bg-slate-600"
          >
            Account
          </a>
          <a
            href="https://argonium.net"
            className="pl-4 pr-4 rounded border-transparent duration-300 pt-1 pb-1 hover:pb-3 hover:pt-3 hover:bg-[#464c4e] hover:duration-200 hover:text-white focus:bg-slate-600"
          >
            Argonium
          </a>
          <a href="" className="pl-4 pr-4">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-9 h-9 -translate-y-3 top-1 absolute navicon translate-x-2 p-1 rounded-full duration-300 hover:bg-[#464c4e] hover:duration-200"
            />
          </a>
          <a href="" className="pl-4 pr-4">
            <FontAwesomeIcon
              icon={faDiscord}
              className="w-9 h-9 -translate-y-3 top-1 absolute navicon translate-x-2 p-1 rounded-full duration-300 hover:bg-[#464c4e] hover:duration-200 ml-4"
            />
          </a>
        </div>
      </div>
      <Search />
    </div>
  );
}

export default Navbar;
