import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbardiv">
      <div className="centered-nav">
        <a href="">Home</a>
        <a href="">Api</a>
        <a href="">Github</a>
      </div>
      <div className="right-nav">
        <a href="">Login</a>
        <a href="">Search</a>
      </div>
    </div>
  );
}

export default Navbar;
