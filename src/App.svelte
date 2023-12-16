<script>
  import Router from "svelte-spa-router";

  import Home from "./routes/Home.svelte";
  import Discord from "./routes/Discord.svelte";
  import Github from "./routes/Github.svelte";
  import Account from "./routes/Account.svelte";
  import Signup from "./routes/Signup.svelte";

  const routes = {
    "/": Home,
    "/discord": Discord,
    "/github": Github,
    "/account": Account,
    "/signup": Signup,
  };
</script>

<nav class="text-xl m-5">
  <a
    class="m-1 duration-300 text-white font-semibold hover:text-gray-300"
    href="/">Home</a
  >
  <a
    class="m-1 duration-300 text-white font-semibold hover:text-gray-300"
    href="#/discord">Discord</a
  >
  <a
    class="m-1 duration-300 text-white font-semibold hover:text-gray-300"
    href="#/github">GitHub</a
  >
</nav>
<Router {routes} />
