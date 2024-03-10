import { motion } from "framer-motion";

import github from "./assets/github-px.png";
import yt from "./assets/yt-px.png";
import dc from "./assets/dc-px.png";
import patreon from "./assets/patreon-px.png";

function App() {
  const redirect = () => {
    location.assign("mailto:hello@aapelix.dev");
  };

  return (
    <div className="poppins-regular">
      <nav className="fixed w-full lg:right-10 mt-5 sm:text-center lg:text-right flex flex-row lg:justify-end sm:justify-center">
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }}>
          <a className="p-2" href="https://github.com/aapelix/">
            <img
              className="hover:-translate-y-2 m-2 w-12 duration-300"
              style={{ imageRendering: "pixelated" }}
              src={github}
              alt=""
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <a className="p-2" href="https://youtube.com/@aapelix/">
            <img
              className="hover:-translate-y-2 m-2 w-12 duration-300"
              style={{ imageRendering: "pixelated" }}
              src={yt}
              alt=""
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a className="p-2" href="https://github.com/aapelix/">
            <img
              className="hover:-translate-y-2 m-2 w-12 duration-300"
              style={{ imageRendering: "pixelated" }}
              src={dc}
              alt=""
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a className="p-2" href="https://patreon.com/Aapelix">
            <img
              className="hover:-translate-y-2 m-2 w-12 duration-300"
              style={{ imageRendering: "pixelated" }}
              src={patreon}
              alt=""
            />
          </a>
        </motion.div>
      </nav>

      <div className="flex flex-col items-center pt-40">
        <h1 className="text-7xl flex sm:flex-col lg:flex-row text-center justify-center font-extrabold">
          Its me,
          <p className="inline-block bg-clip-text text-transparent ml-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-animate">
            Aapelix
          </p>
        </h1>
        <p className="mt-2 text-xl text-gray-400">
          I'm programmer from Finland.
        </p>
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <button
            className="bg-white text-black p-3 rounded-3xl m-5"
            onClick={redirect}
          >
            Contact me!
          </button>
        </motion.button>

        <div className="w-screen flex flex-col items-center">
          <p className="text-gray-500 mt-44 text-xl">Jump to</p>
          <div className="flex flex-row flex-wrap justify-center">
            <a href="#projects">
              <div className="bg-zinc-900 w-64 text-center py-10 rounded-3xl m-2 mt-5 hover:bg-zinc-800 duration-300">
                <h1 className="text-3xl">Projects</h1>
              </div>
            </a>
            <a href="#blog">
              <div className="bg-zinc-900 w-64 text-center py-10 rounded-3xl m-2 mt-5 hover:bg-zinc-700 duration-300">
                <h1 className="text-3xl">Blog</h1>
              </div>
            </a>
            <a href="">
              <div className="bg-zinc-900 w-64 text-center py-10 rounded-3xl m-2 mt-5 hover:bg-zinc-600 duration-300">
                <h1 className="text-3xl">The moon</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
