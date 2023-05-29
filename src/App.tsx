import React from "react";

import { motion } from "framer-motion";
// @ts-ignore
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
        <section className="absolute top-1/3 left-1/2 -translate-x-1/2 -transform-y-1/2 text-white text-7xl text-center">
          <span ref={el} />
          <h2 className="text-5xl">Programmer from Finland</h2>
          <motion.div animate={{ y: 100 }} whileHover={{ scale: 1.2 }}>
            <img
              src={logo}
              alt=""
              className="absolute left-1/2 -translate-x-1/2 top-21"
            />
          </motion.div>
        </section>
        <div className="absolute -bottom-36 left-0 w-full overflow-hidden leading-none sm:-bottom-72">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-36"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-[#2b2b2b]"
            ></path>
          </svg>
        </div>
        <section className="absolute -bottom-whoiam2 text-center h-whoiam w-full top-25 bg-whoiam sm:-bottom-whoiam3">
          <motion.div
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            viewport={{ once: false }}
          >
            <h1 className="pt-24 text-5xl">Who i am?</h1>
          </motion.div>
          <motion.div
            initial={{ y: 250 }}
            whileInView={{ y: 0 }}
            whileHover={{ rotate: 20 }}
          >
            <p className="text-3xl">
              I'm a programmer from Finland who mainly focuses on Java
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default App;
