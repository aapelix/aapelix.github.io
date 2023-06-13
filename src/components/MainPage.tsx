import Navbar from "./items/Navbar";
import Bottom from "./items/Bottom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCube, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faNpm } from "@fortawesome/free-brands-svg-icons";

function App() {
  const handleMouseEvent = (e: {
    clientX?: any;
    clientY?: any;
    currentTarget?: any;
  }) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const contactMe = () => {
    window.location.replace("mailto:hello@aapelix.dev");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("hello@aapelix.dev");
  };

  return (
    <>
      <div className="z-10 cursor-default">
        <section className="absolute top-1/3 left-1/2 -translate-x-1/2 -transform-y-1/2 text-white text-7xl text-center">
          <h1>It's me, Aapelix</h1>
          <h2 className="text-3xl text-[#969e99]">Programmer from Finland</h2>
          <button
            className="text-xl bg-white hover:bg-gray-200 rounded-3xl p-2 mr-2"
            onClick={contactMe}
          >
            <p className="bg-gradient-to-l from-[#3956ec] to-[#14dbfa] bg-clip-text text-fill text-gradient">
              Contact me
            </p>
          </button>
          <button
            className="text-xl bg-gray-800 text-white p-2 border-image"
            onClick={copyToClipboard}
          >
            hello@aapelix.dev
          </button>
          <FontAwesomeIcon
            icon={faCopy}
            className="w-8 h-8 ml-2 bg-gray-900 p-3 rounded-full translate-y-3 cursor-pointer hover:bg-gray-800 hover:duration-150 duration-300"
            onClick={copyToClipboard}
          />
          <div></div>
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
          <h1 className="text-5xl absolute left-1/2 -translate-x-1/2 sm:block lg:hidden w-full top-7">
            Projects section mobile support coming soon
          </h1>
          <div
            id="cards"
            className="absolute flex flex-wrap w-[calc(100%-20px)] max-w-4xl gap-2 left-1/2 -translate-x-1/2 sm:hidden"
          >
            <h1 className="text-5xl absolute left-1/2 -translate-x-1/2 -top-14">
              Projects
            </h1>
            <a href="https://github.com/aapelix/qol-plugin">
              <div
                className="card h-64 w-72 relative bg-[rgba(255,255,255,0.01)] rounded-2xl cursor-pointer before:h-full before:absolute before:w-full before:left-0 before:top-0 before:content"
                onMouseMove={handleMouseEvent}
              >
                <div className="card-content"></div>
                <div className="">
                  <FontAwesomeIcon
                    icon={faCube}
                    className="absolute w-20 h-20 -translate-x-1/2 top-6"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 top-28 w-full">
                    <h1 className="text-3xl">QOL Plugin</h1>
                    <p className="mt-2 text-gray-400">
                      Minecraft QOL Commands mod for Spigot Minecraft 1.19.2
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://argonium.net">
              <div
                className="card h-64 w-72 relative bg-[rgba(255,255,255,0.01)] rounded-2xl cursor-pointer before:h-full before:absolute before:w-full before:left-0 before:top-0 before:content"
                onMouseMove={handleMouseEvent}
              >
                <div className="card-content"></div>
                <div className="">
                  <FontAwesomeIcon
                    icon={faNpm}
                    className="absolute w-20 h-20 -translate-x-1/2 top-6"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 top-28 w-full">
                    <h1 className="text-3xl">Argonium</h1>
                    <p className="mt-2 text-gray-400">
                      Use many popular command line commands 39.948 times easier
                      and faster!
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div
                className="card h-64 w-72 relative bg-[rgba(255,255,255,0.01)] rounded-2xl cursor-pointer before:h-full before:absolute before:w-full before:left-0 before:top-0 before:content"
                onMouseMove={handleMouseEvent}
              >
                <div className="card-content"></div>
                <div className="">
                  <FontAwesomeIcon
                    icon={faQuestion}
                    className="absolute w-20 h-20 -translate-x-1/2 top-6"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 top-28 w-full">
                    <h1 className="text-3xl">???</h1>
                    <p className="mt-2 text-gray-400">Soon™</p>
                  </div>
                </div>
              </div>
            </a>
            <a>
              <div
                className="card h-64 w-72 relative bg-[rgba(255,255,255,0.01)] rounded-2xl cursor-pointer before:h-full before:absolute before:w-full before:left-0 before:top-0 before:content"
                onMouseMove={handleMouseEvent}
              >
                <div className="card-content"></div>
                <div className="">
                  <FontAwesomeIcon
                    icon={faQuestion}
                    className="absolute w-20 h-20 -translate-x-1/2 top-6"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 top-28 w-full">
                    <h1 className="text-3xl">???</h1>
                    <p className="mt-2 text-gray-400">Soon™</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div
                className="card h-64 w-72 relative bg-[rgba(255,255,255,0.01)] rounded-2xl cursor-pointer before:h-full before:absolute before:w-full before:left-0 before:top-0 before:content"
                onMouseMove={handleMouseEvent}
              >
                <div className="card-content"></div>
                <div className="">
                  <FontAwesomeIcon
                    icon={faQuestion}
                    className="absolute w-20 h-20 -translate-x-1/2 top-6"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 top-28 w-full">
                    <h1 className="text-3xl">???</h1>
                    <p className="mt-2 text-gray-400">Soon™</p>
                  </div>
                </div>
              </div>
            </a>
            <div
              className="card h-64 w-72 relative bg-[rgba(255,255,255,0.01)] rounded-2xl cursor-pointer before:h-full before:absolute before:w-full before:left-0 before:top-0 before:content"
              onMouseMove={handleMouseEvent}
            >
              <div className="card-content"></div>
              <div className="">
                <FontAwesomeIcon
                  icon={faQuestion}
                  className="absolute w-20 h-20 -translate-x-1/2 top-6"
                />
                <div className="absolute left-1/2 -translate-x-1/2 top-28 w-full">
                  <h1 className="text-3xl">???</h1>
                  <p className="mt-2 text-gray-400">Soon™</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Bottom />
      </div>
      <Navbar />
    </>
  );
}

export default App;
