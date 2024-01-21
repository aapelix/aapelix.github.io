<script>
  import { fly } from "svelte/transition";
  import Button from "../lib/Button.svelte";

  let scroll;
  let buttonScale;
  let tellMe;

  let showScroll = false;
</script>

<svelte:window bind:scrollY={scroll} />

{#if showScroll}
  <p class="fixed z-50">{scroll}</p>
{/if}

<main>
  <div class="overflow-y-auto" in:fly={{ y: -100 }}>
    <div class="pb-32 pt-44">
      <h1 class="font-bold text-6xl flex justify-center">
        Its me, <p
          class="inline-block bg-clip-text text-transparent ml-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-animate"
        >
          Aapelix
        </p>
      </h1>
      <p class="mt-2 text-xl text-gray-400 font-bold">
        I'm programmer from Finland. On mobile phones this website may be very
        buggy
      </p>
      <Button title="Contact me!" />
    </div>
    <div
      class="bg-[#560090] w-full lg:hidden h-44 absolute -z-40 translate-y-40"
    />
    <div class="bg-[#111111]">
      <section
        class="bg-[url('/layered-steps-haikei2.png')] bg-repeat-x h-96 p-10 mt-44 sm:-translate-y-10 lg:translate-y-0 bg-[#111111] relative z-50"
      ></section>

      <section
        id="faq"
        class="bg-[#111111] h-[calc(100vh-320px)] flex text-left lg:flex-nowrap sm:flex-wrap sm:flex-row lg:flex-auto"
      >
        <div class="flex flex-col items-center sm:justify-center">
          {#if scroll >= 650}
            <h1
              class="text-9xl font-extrabold ml-20 w-96 sm:ml-10 lg:ml-20"
              in:fly={{ x: -100, duration: 2000 }}
              out:fly={{ x: -100, duration: 500, delay: 500 }}
            >
              Who am I?
            </h1>
            <button
              class="pl-10 pr-10 pt-5 pb-5 text-xl rounded-3xl w-64 m-5 mb-2 hover:scale-110 duration-200 bg-[#262164]"
              in:fly={{ y: 100, duration: 2000, delay: 1000 }}
              out:fly={{ x: -100, duration: 500, delay: 200 }}
              on:click={() => {
                tellMe = true;
              }}>Tell me!</button
            >
            <button
              class="pl-10 pr-10 pt-5 pb-5 text-xl rounded-3xl w-64 m-5 mt-2 hover:scale-110 duration-200 bg-secondary"
              in:fly={{ y: 100, duration: 2000, delay: 1200 }}
              out:fly={{ x: -100, duration: 500 }}
              on:click={() => {
                tellMe = true;
              }}>Who asked?</button
            >
          {/if}
        </div>
        <div
          class="w-auto mt-20 flex flex-row justify-center flex-wrap items-center"
        >
          {#if tellMe && scroll >= 650}
            <p
              in:fly={{ x: 100, duration: 2000 }}
              out:fly={{ x: 100, duration: 500, delay: 200 }}
              class="text-lg w-96 sm:text-base lg:ml-10 lg:text-lg sm:-translate-y-24 lg:translate-y-0 sm:text-center"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eligendi, minus nesciunt exercitationem vitae iusto repellendus,
              amet officia eum ad recusandae dolores harum corporis dolore
              quisquam ipsa. Quod harum voluptas numquam? Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Eligendi, minus nesciunt
              exercitationem vitae iusto repellendus, amet officia eum ad
              recusandae dolores harum corporis dolore quisquam ipsa. Quod harum
              voluptas numquam?
            </p>
            <img
              in:fly={{ x: 100, duration: 2000, delay: 300 }}
              out:fly={{ x: 100, duration: 500, delay: 200 }}
              class="w-auto h-64 mt-5 rounded-3xl m-10 sm:hidden lg:inline"
              src="/wallpaper.png"
              alt=""
            />
            <img
              in:fly={{ x: 100, duration: 2000, delay: 600 }}
              out:fly={{ x: 100, duration: 500, delay: 400 }}
              class="w-auto h-64 mt-5 rounded-3xl m-10 sm:hidden lg:inline"
              src="/bgbgbg2.png"
              alt=""
            />
            <img
              in:fly={{ x: 100, duration: 2000, delay: 900 }}
              out:fly={{ x: 100, duration: 500, delay: 600 }}
              class="w-auto h-64 mt-5 rounded-3xl m-10 sm:hidden lg:inline"
              src="/bgbgbg2.png"
              alt=""
            />
            <img
              in:fly={{ x: 100, duration: 2000, delay: 1200 }}
              out:fly={{ x: 100, duration: 500, delay: 800 }}
              class="w-auto h-64 mt-5 rounded-3xl m-10 sm:hidden lg:inline"
              src="/aapelixnobgglasses.png"
              alt=""
            />
          {/if}
        </div>
      </section>

      <section
        id="projects"
        class="bg-[#111111] flex items-center text-right flex-row-reverse pt-44 h-96"
      >
        {#if scroll >= 1200}
          <div class="flex flex-col">
            <h1
              class="text-9xl font-extrabold w-min mr-44 text-right sm:text-7xl sm:mr-4 lg:mr-40 lg:text-9xl"
              in:fly={{ x: 100, duration: 2000 }}
              out:fly={{ x: 100, duration: 500, delay: 500 }}
            >
              My Projects
            </h1>
            <h1 class="absolute right-1/2 translate-x-1/2 translate-y-52">
              soonTM
            </h1>
          </div>
        {/if}
      </section>

      <footer
        class="bg-[#111111] flex justify-center"
        on:mousedown={() => (buttonScale = 1.2)}
        on:mouseup={() => (buttonScale = 1)}
      >
        <img
          src="/icon-big.png"
          style="transform: scale({buttonScale})"
          class="w-96 duration-500 m-10"
          alt=""
        />
      </footer>
    </div>
  </div>
</main>
