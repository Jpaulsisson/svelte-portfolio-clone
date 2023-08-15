

{#if open}
<!-- Modal maker -->
<div class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center opacity-95 p-8 lg:p-0">
  <div  class="modal-overlay fixed w-full h-full bg-gray-900 opacity-80"></div>
<!-- end Modal maker/begin actual modal -->
  <div class="bg-primaryBg border-accentRed border-4 w-full md:h-max md:w-9/12  mx-auto rounded-lg shadow-xl z-50 overflow-y-auto">
    <div use:clickOutside  class="head bg-primaryBg py-5 px-8 text-2xl flex items-center justify-center">
      <!-- close button -->
      <button class="w-9/12 p-2 bg-primaryBg hover:bg-accentGreen hover:text-primaryBg rounded-full text-primaryFont font-thin " on:click={() => dispatch('close')}>
      <span class="text-accentOrange">&#60;/</span>close<span class="text-accentOrange">&#62;</span>
      </button>
      <!-- end close button -->
    </div>
    <div class="content  bg-primaryBg">
      <div class='text-center my-12 '>
        <h4 class='text-accentGreen text-2xl md:text-4xl'>Email:</h4>
        <p class=' text-primaryFont text-lg md:text-3xl'>paulsissonsemail@gmail.com</p>
        <button class='p-1 w-1/8 text-accentGreen border-y-[1px] border-accentOrange'  on:click={() => navigator.clipboard.writeText('paulsissonsemail@gmail.com')}>copy</button>
      </div>
      <div class='text-center my-12'>
        <h4 class='text-accentGreen text-2xl md:text-4xl'>Phone:</h4>
        <p class=' text-primaryFont text-xl md:text-3xl'>205-520-8659</p>
        <button class='p-1 w-1/8 text-accentGreen border-y-[1px] border-accentOrange' on:click={() => navigator.clipboard.writeText('205-520-8659')}>copy</button>

      </div>
      <slot name="body" />
    </div>
  </div>
</div>
{/if}

<script>
  import { createEventDispatcher } from "svelte";
  import { clickOutside } from "../functions/clickOutside";

  export let open = false;

  const dispatch = createEventDispatcher()
  
</script>