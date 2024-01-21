<script>
  import Router from "svelte-spa-router";

  import Home from "./routes/Home.svelte";
  import { fly } from "svelte/transition";

  const routes = {
    "/": Home,
  };
</script>

<main>
  <div
    class="bg-[url('/layered-steps-haikei.png')] bg-repeat-x h-96 p-10 absolute w-full rotate-180 top-0 -translate-y-14 -z-50"
  />

  <nav
    class="text-xl mt-5 z-50 w-screen flex justify-center cursor-default"
    in:fly={{ y: -100 }}
  >
    <div class="bg-[#111111] w-96 p-5 rounded-3xl">
      <a
        class="m-1 duration-300 text-white font-semibold hover:text-gray-300 hover-underline-animation"
        href="/">Home</a
      >
      <a
        class="m-1 duration-300 text-white font-semibold hover:text-gray-300 hover-underline-animation"
        href="https://youtube.com/@aapelix">YouTube</a
      >
      <a
        class="m-1 duration-300 text-white font-semibold hover:text-gray-300 hover-underline-animation"
        href="https://github.com/aapelix">GitHub</a
      >
    </div>
  </nav>
  <Router {routes} />
</main>
