import { motion } from "framer-motion";
import github from "./assets/github-mark-white.svg";

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
            href="https://x.com/aapelix1/"
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
        <div id="projects" className="bg-zinc-900 w-screen mt-24 pb-24">
          <h1 className="font-extrabold text-5xl mt-36 pb-20 text-center">
            My projects
          </h1>
          <div className="flex w-screen justify-center flex-wrap">
            {/* PROJECT */}

            <div className="w-96 h-64 rounded-3xl mclc bg-[url('./assets/mclc-2.png')] hover:scale-110 duration-300 m-5 bg-contain">
              <h1 className="text-3xl text-center m-5 font-bold">MCLC Rust</h1>
              <div className="bg-zinc-800 h-32 rounded-3xl translate-y-16 duration-300">
                <div className="m-3">
                  <p className="m-5 translate-y-2 text-gray-300">
                    Minecraft Launcher Core Rust is a crate for rust to download
                    and launch minecraft versions and more!
                  </p>
                  <a href="https://github.com/aapelix/mc_launcher_core_rs">
                    <img
                      className="w-8 m-5 h-8 -translate-y-2"
                      src={github}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* PROJECT */}

            <div className="w-96 h-64 rounded-3xl mclc bg-[url('./assets/banner.png')] hover:scale-110 duration-300 m-5 bg-contain">
              <h1 className="text-3xl text-center m-5 font-bold">
                Project KTJNKEIO
              </h1>
              <div className="bg-zinc-800 rounded-3xl translate-y-16 h-32 duration-300">
                <div className="m-3">
                  <p className="m-5 translate-y-2 text-gray-300">
                    A work in progress wip game made with Rust & Bevy
                  </p>
                  <a href="https://github.com/aapelix/project-ktjnkeio">
                    <img
                      className="w-8 m-5 h-8 -translate-y-2"
                      src={github}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* PROJECT */}

            <div className="w-96 h-64 rounded-3xl mclc bg-[url('https://wholesgame.com/wp-content/uploads/Minecraft-wallpaper.jpg')] hover:scale-110 duration-300 m-5">
              <h1 className="text-3xl text-center m-5 font-bold">Pruschr</h1>
              <div className="bg-zinc-800 rounded-3xl translate-y-16 h-32 duration-300">
                <div className="m-3">
                  <p className="m-5 translate-y-2 text-gray-300">Soon to be</p>
                  <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
                    <img
                      className="w-8 m-5 h-8 -translate-y-2"
                      src={github}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center cursor-pointer text-gray-500 text-xl">
            View all
          </p>
        </div>
        <div id="blog" className="bg-zinc-800 w-screen mt-0">
          <h1 className="font-extrabold text-5xl mt-36 pb-20 text-center">
            Blog soonTM
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
