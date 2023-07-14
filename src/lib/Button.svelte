<script>
  let scale;
  export let title;
</script>

<button
  on:mousedown={() => (scale = 0.9)}
  on:mouseup={() => (scale = 1)}
  on:mouseenter={() => (scale = 1.1)}
  on:mouseleave={() => (scale = 1)}
  on:click={() => (window.location.href = "mailto:hello@aapelix.dev")}
  style="transform: scale({scale})"
  class="duration-300 text-2xl bg-blue-500 p-2 rounded-lg m-2">{title}</button
>
