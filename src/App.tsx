import Navbar from "./components/Navbar";
import Mobilenavbar from "./components/Mobilenavbar";
import anime from "animejs/lib/anime.es.js";

anime({
  targets: ".mainani1",
  translateY: 20,
});

function App() {
  return (
    <>
      <Navbar />
      <Mobilenavbar />
      <div>
        <section className="main">
          <h1 className="mainani1">It's I, Aapelix</h1>
          <h2>Programmer from Finland</h2>
        </section>
      </div>
    </>
  );
}

export default App;
