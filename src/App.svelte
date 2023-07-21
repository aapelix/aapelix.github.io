<script>
  // @ts-nocheck

  import { Router, Link, Route } from "svelte-routing";

  import Home from "./routes/Home.svelte";
  import Discord from "./routes/Discord.svelte";
  import Github from "./routes/Github.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav class="text-xl m-5">
    <Link
      class="m-1 duration-300 text-white font-semibold hover:text-slate-500"
      to="/">Home</Link
    >
    <Link
      class="m-1 duration-300 text-white font-semibold hover:text-slate-500"
      to="discord">Discord</Link
    >
    <Link
      class="m-1 duration-300 text-white font-semibold hover:text-slate-500"
      to="github">GitHub</Link
    >
  </nav>
  <div>
    <Route path="discord" component={Discord} />
    <Route path="github" component={Github} />
    <Route path="/" component={Home} />
  </div>
</Router>
