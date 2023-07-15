<script>
  import { onMount } from "svelte";

  let slidePosition = 0;
  let slideCount = 0;

  let isPaused = false;

  let images = [
    "/languages/astro.png",
    "/languages/c.png",
    "/languages/c++.png",
    "/languages/css.png",
    "/languages/dart.png",
    "/languages/flutter.png",
    "/languages/java.png",
    "/languages/js.png",
    "/languages/kotlin.png",
    "/languages/md.png",
    "/languages/php.png",
    "/languages/python.png",
    "/languages/react.png",
    "/languages/rust.png",
    "/languages/svelte.png",
    "/languages/ts.png",
    "/languages-2/astro.png",
    "/languages-2/c.png",
    "/languages-2/c++.png",
    "/languages-2/css.png",
    "/languages-2/dart.png",
    "/languages-2/flutter.png",
    "/languages-2/java.png",
    "/languages-2/js.png",
    "/languages-2/kotlin.png",
    "/languages-2/md.png",
    "/languages-2/php.png",
    "/languages-2/python.png",
    "/languages-2/react.png",
    "/languages-2/rust.png",
    "/languages-2/svelte.png",
    "/languages-2/ts.png",

    // Add more image URLs as needed
  ];

  const imageWidth = 80;

  onMount(() => {
    setInterval(() => {
      if (!isPaused) {
        slidePosition -= imageWidth;

        if (slideCount === images.length - 18) {
          slidePosition = 0;
          slideCount = 0;
        } else {
          slideCount++;
        }
      }
    }, 1200);
  });
</script>

<div
  class="flex overflow-hidden w-screen"
  on:mouseenter={() => (isPaused = true)}
  on:mouseleave={() => (isPaused = false)}
>
  <div
    class="flex transition-transform duration-500 ease-in-out"
    style="transform: translateX({slidePosition}px);"
  >
    {#each images as image}
      <img class="object-contain w-20 m-2" src={image} alt="" />
    {/each}
  </div>
</div>
