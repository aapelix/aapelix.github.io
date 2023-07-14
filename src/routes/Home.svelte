<script>
  import { fly } from "svelte/transition";
  import Button from "../lib/Button.svelte";

  let scroll;
</script>

<div class="mt-24">
  <h1 class="font-bold text-6xl">Its me, Aapelix</h1>
  <p class="mt-2 text-xl text-gray-300">I'm programmer from Finland</p>
  <Button title="Contact me!" />
</div>

<svelte:window bind:scrollY={scroll} />

<section id="projects" class="mt-32 bg-[#1a1a1a] pt-10 pb-10">
  <h1 class="font-bold text-2xl mb-10">My Projects</h1>
  <div class="flex flex-wrap justify-center">
    <a
      in:fly={{ y: -20 }}
      href="https://www.blocka.dev/"
      class="bg-[#0f0f0f] w-96 h-60 p-2 m-2 rounded-lg hover:scale-110 duration-300"
    >
      <h1 class="font-bold text-2xl mt-5">Blocka</h1>
      <p class="text-gray-400 m-1">
        Free, Open-source and small Minecraft launcher
      </p>
    </a>
    <a
      in:fly={{ y: -20 }}
      href="https://www.argonium.net/"
      class="bg-[#0f0f0f] w-96 h-60 p-2 m-2 rounded-lg hover:scale-110 duration-300"
    >
      <h1 class="font-bold text-2xl mt-5">ArgoniumNPM</h1>
      <p class="text-gray-400 m-1">Npm package for making things easier</p>
    </a>
    <a
      in:fly={{ y: -20 }}
      href="https://github.com/aapelix/qol-plugin"
      class="bg-[#0f0f0f] w-96 h-60 p-2 m-2 rounded-lg hover:scale-110 duration-300"
    >
      <h1 class="font-bold text-2xl mt-5">QOL Plugin</h1>
      <p class="text-gray-400 m-1">Mineraft QOL Spigot Plugin</p>
    </a>
    <a
      in:fly={{ y: -20 }}
      href="https://modrinth.com/mod/realmiutils"
      class="bg-[#0f0f0f] w-96 h-60 p-2 m-2 rounded-lg hover:scale-110 duration-300"
    >
      <h1 class="font-bold text-2xl mt-5">RealmiUtils</h1>
      <p class="text-gray-400 m-1">Minecraft mod for Realmi.fi</p>
    </a>

    <a
      in:fly={{ y: 20 }}
      href="/"
      class="bg-[#0f0f0f] w-96 h-60 p-2 m-2 rounded-lg hover:scale-110 duration-300"
    >
      <h1 class="font-bold text-2xl mt-5">Minecraft CLI</h1>
      <p class="text-gray-400 m-1">Launch minecraft with Command Line</p>
    </a>
    <a
      in:fly={{ y: 20 }}
      href="/"
      class="bg-[#0f0f0f] w-96 h-60 p-2 m-2 rounded-lg hover:scale-110 duration-300"
    >
      <h1 class="font-bold text-2xl mt-5">Argonium</h1>
      <p class="text-gray-400 m-1">Minecraft mod downloader app</p>
    </a>
    <a
      in:fly={{ y: 20 }}
      href="https://www.blocka.dev/"
      class="bg-[#0f0f0f] w-96 h-60 p-2 m-2 rounded-lg hover:scale-110 duration-300"
    >
      <h1 class="font-bold text-2xl mt-5">soonTM</h1>
      <p class="text-gray-400 m-1">Hej! Jag dricker erikeeper</p>
    </a>
    <a
      in:fly={{ y: 20 }}
      href="https://www.blocka.dev/"
      class="bg-[#0f0f0f] w-96 h-60 p-2 m-2 rounded-lg hover:scale-110 duration-300"
    >
      <h1 class="font-bold text-2xl mt-5">soonTM</h1>
      <p class="text-gray-400 m-1">Hej! Jag dricker erikeeper</p>
    </a>
  </div>
</section>
<footer class="bg-[#161616] flex justify-center">
  <img src="/icon-big.png" class="h-44 m-10" alt="" />
</footer>
