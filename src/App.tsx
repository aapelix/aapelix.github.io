import React from "react";

import { motion } from "framer-motion";
import Typed from "typed.js";

import Navbar from "./components/Navbar";
import Mobilenavbar from "./components/Mobilenavbar";

import logo from "/LogoStroke.svg";

function App() {
  const el = React.useRef(null);

  React.useEffect(() => {
    // @ts-ignore
    const typed = new Typed(el.current, {
      strings: ["It's I, Aapelix"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Mobilenavbar />
      <div>
        <section className="main">
          <span ref={el} />
          <h2>Programmer from Finland</h2>
          <motion.div
            whileTap={{ rotate: 180 }}
            animate={{ y: 100 }}
            whileHover={{ scale: 1.2 }}
          >
            <img src={logo} alt="" />
          </motion.div>
        </section>
        <div className="shape">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
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
