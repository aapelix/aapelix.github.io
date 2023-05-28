import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faCloud } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <ul className="nav">
      <li>
        <a href="">
          <p>Home</p>
          <FontAwesomeIcon icon={faHome} />
        </a>
      </li>
      <li>
        <a href="">
          <p>Api</p>
          <FontAwesomeIcon icon={faCloud} />
        </a>
      </li>
      <li>
        <a href="">
          <p>More</p>
          <FontAwesomeIcon icon={faPlus} />
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
