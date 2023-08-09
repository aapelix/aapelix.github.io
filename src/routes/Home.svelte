<script>
  import { fly, slide } from "svelte/transition";
  import Button from "../lib/Button.svelte";
  import Accordion from "../lib/Accordion.svelte";

  let scroll;
  let rotate;

  let showScroll = false;
</script>

<svelte:window bind:scrollY={scroll} />

{#if showScroll}
  <p class="fixed">{scroll}</p>
{/if}

{#if scroll > 454}
  <img
    transition:fly={{ y: 200, opacity: 1 }}
    class="fixed h-44 rotate-180 top-0 right-44 z-10"
    src="/bgbgbg2.png"
    alt=""
  />
{/if}

<div in:fly={{ y: -100 }}>
  <div class="pb-32 pt-24">
    <h1 class="font-bold text-6xl">Its me, Aapelix</h1>
    <p class="mt-2 text-xl text-gray-400 font-bold">
      I'm programmer from Finland
    </p>
    <Button title="Contact me!" />
    <img
      src="/bgbgbg2.png"
      class="h-44 absolute -translate-y-12 left-44 z-0 lg:left-96 lg:translate-x-56"
      alt=""
    />
  </div>

  <section id="projects" class="bg-[#2a2a2a] pt-10 pb-10 z-10">
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
  <section id="faq" class="bg-[#1a1a1a] p-10">
    <h1 class="text-2xl font-bold">FAQ</h1>
    <Accordion
      title="Who I am?"
      desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi non asperiores praesentium nulla possimus officiis nobis voluptatum suscipit mollitia? Fuga, reprehenderit recusandae? Non ratione id omnis et officia tempora ad?"
    />
  </section>
  <footer
    class="bg-[#0a0a0a] flex justify-center"
    on:mousedown={() => (rotate = 180)}
    on:mouseup={() => (rotate = 0)}
  >
    <img
      src="/icon-big.png"
      style="transform: rotate({rotate}deg)"
      class="w-96 duration-500 m-10"
      alt=""
    />
  </footer>
</div>
