import { motion } from "framer-motion";

function App() {
  const redirect = () => {
    location.assign("mailto:hello@aapelix.dev");
  };

  return (
    <div className="poppins-regular">
      <nav className="fixed w-full lg:right-10 mt-5 sm:text-center lg:text-right flex flex-row lg:justify-end sm:justify-center">
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }}>
          <a
            className="p-2 hover-underline-animation"
            href="https://github.com/aapelix/"
          >
            GitHub
          </a>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <a
            className="p-2 hover-underline-animation"
            href="https://youtube.com/@aapelix/"
          >
            YouTube
          </a>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a
            className="p-2 hover-underline-animation"
            href="https://github.com/aapelix/"
          >
            Discord
          </a>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            className="p-2 hover-underline-animation"
            href="https://github.com/aapelix/"
          >
            X
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

        <h1 className="font-extrabold text-4xl mt-96 translate-y-96 pb-20 text-center">
          You actually thought that I would do something here?
        </h1>
      </div>
    </div>
  );
}

export default App;
