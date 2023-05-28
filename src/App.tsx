import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Mobilenavbar from "./components/Mobilenavbar";

import logo from "/LogoStroke.svg";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

function App() {
  return (
    <>
      <Navbar />
      <Mobilenavbar />
      <div>
        <section className="main">
          <motion.div animate={{ y: 20 }}>
            <h1 className="mainani1">It's I, Aapelix</h1>
          </motion.div>
          <h2>Programmer from Finland</h2>
          <motion.div
            whileTap={{ rotate: 180 }}
            animate={{ y: 100 }}
            whileHover={{ scale: 1.2 }}
          >
            <img src={logo} alt="" />
          </motion.div>
        </section>
        <section className="who-i-am">
          <motion.div
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            viewport={{ once: false }}
          >
            <h1>Who i am?</h1>
          </motion.div>
          <motion.div
            initial={{ y: 250 }}
            whileInView={{ y: 0 }}
            whileHover={{ rotate: 20 }}
          >
            <p>I'm a programmer from Finland who mainly focuses on Java</p>
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default App;
