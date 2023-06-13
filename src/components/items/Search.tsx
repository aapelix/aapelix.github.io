import { useState } from "react";
import { Users } from "../data/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [query, setQuery] = useState("");

  const close = () => {
    const search = document.querySelector(".searcharea");
    search?.classList.remove("visible");
  };

  return (
    <div className="searcharea absolute left-1/2 -translate-x-1/2 w-1/2 top-24 bg-[#2a2e35] h-[calc(100vh-150px)] rounded-2xl sm:w-[calc(50%+100px)]">
      <FontAwesomeIcon
        icon={faPlus}
        className="absolute right-4 top-4 rotate-45 w-8 h-8 cursor-pointer"
        onClick={close}
      />
      <input
        type="text"
        placeholder="Search"
        className="search absolute left-1/2 -translate-x-1/2 w-[calc(50%+300px)] h-10 top-9 bg-[#1e2328] border-b-4 border-[#2f66f4] text-2xl focus:outline-none sm:w-[calc(50%+90px)]"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="absolute left-1/2 top-1/4 -translate-y-20 -translate-x-1/2 w-full max-h-[calc(70px*9)] overflow-auto">
        {Users.filter((user) =>
          user.name.toLocaleLowerCase().includes(query)
        ).map((user) => (
          <li
            key={user.id}
            className="text-start text-2xl bg-[#1e2328] mb-2 w-[calc(50%+300px)] sm:w-[calc(50%+90px)] cursor-pointer ml-24 -translate-x-1"
            style={{
              display: query ? "block" : "none",
            }}
          >
            {user.name}
            <p>{user.info}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
