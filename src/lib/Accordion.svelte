<script>
  import { slide } from "svelte/transition";

  let isOpen;

  export let title;
  export let desc;
</script>

<div class="flex justify-center m-5 text-left">
  <div class="w-96 bg-[#292929] rounded-lg p-2">
    <button
      class="w-full text-xl font-semibold text-left"
      on:click={() => (isOpen = !isOpen)}>{title}</button
    >
    {#if isOpen}
      <div transition:slide class="mt-2">
        {desc}
      </div>
    {/if}
  </div>
</div>
