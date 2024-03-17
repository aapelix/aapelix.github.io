import { motion } from "framer-motion";
import { Resend } from "resend";

const resend = new Resend("re_Cr7JqYy9_76CmaafJZLP3fsfh2ytpyHrt");

import github from "./assets/github-px.png";
import yt from "./assets/yt-px.png";
import dc from "./assets/dc-px.png";
import patreon from "./assets/patreon-px.png";

function App() {
  const redirect = () => {
    location.assign("mailto:aapelix@aapelix.dev");
  };

  function handleSubmit(e: { preventDefault: () => void; target: any }) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email.toString;

    resend.emails.send({
      from: "aapelix@aapelix.dev",
      to: "mcaapelix@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
  }

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
      </div>
      <div id="projects" className="bg-[#1a1a1a] w-full h-screen mt-96">
        <div className="bg-[#CD8700] w-96 h-96 rounded-full blur-[400px] absolute -bottom-96 translate-y-80" />
        <div className="bg-[#6D9098] w-[15rem] h-[15rem] rounded-full blur-[200px] absolute -bottom-96 translate-y-80 right-0" />

        <div className="flex flex-row flex-wrap justify-center mt-10">
          <button className="bg-[#0a0a0a] hover:scale-110 duration-300 w-36 h-36 rounded-3xl m-2 mt-5"></button>
          <button className="bg-[#0a0a0a] hover:scale-110 duration-300 w-36 h-36 rounded-3xl m-2 mt-5"></button>
          <button className="bg-[#0a0a0a] hover:scale-110 duration-300 w-36 h-36 rounded-3xl m-2 mt-5"></button>
          <button className="bg-[#0a0a0a] hover:scale-110 duration-300 w-36 h-36 rounded-3xl m-2 mt-5"></button>
          <button className="bg-[#0a0a0a] hover:scale-110 duration-300 w-36 h-36 rounded-3xl m-2 mt-5"></button>
        </div>

        <div className="flex justify-center mt-10">
          <div className="bg-[#0a0a0a] w-[80rem] h-[40rem] rounded-3xl z-0 mx-5"></div>
        </div>
      </div>

      <footer className="z-0 h-max pt-24 text-center pb-10 bg-[#0a0a0a]">
        <div className="w-40 h-40 bg-[#c87aef] absolute rounded-full blur-[100px] translate-y-36 right-0" />

        <div>
          <h1 className="text-9xl font-bold">aapelix</h1>
        </div>

        <form className="mt-10" onSubmit={handleSubmit}>
          <label className="block">
            <span className="block font-medium text-white text-xl">
              Subscribe for my news letter
            </span>
            <input
              type="email"
              name="email"
              placeholder="you@domain.com"
              className="peer ... text-black pt-2 pb-2 text-xl rounded-xl px-1"
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>
        </form>
      </footer>
    </div>
  );
}

export default App;
