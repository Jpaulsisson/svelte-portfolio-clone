<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import ReactIcon from "../resources/React-icon.svg";
  import SvelteIcon from "../resources/svelte-icon.svg"

$: currentPage = $page.url.pathname;

const navItems = [
  {
    page: 'home',
    href: '/',
  },
  {
    page: 'works',
    href: '/works',
  },
  {
    page: 'contact',
    href: '/contact',
  }
]
</script>

<nav class='relative py-10 w-1/2 flex items-center justify-evenly gap-4 text-2xl md:text-3xl'>
  {#each navItems as {page, href}}
  <a href={href} class:active={currentPage === href} >{page}</a>
  {/each}
  <!-- <a href="#" class="p-0 h-[25px] w-28 absolute inset-0 flex items-center justify-center bg-primaryBg rounded-full border-[1px] border-primaryFont">
    <div class="h-full w-full">
      <img src={SvelteIcon} alt="svelte icon" class="dampen w-full h-full brightness-90 bg-blue-900 rounded-full border-primaryFont border-[1px]">
    </div>
    <div class="h-full w-full">
      <img src={ReactIcon} alt="react icon" class=" brightness-50  w-full h-full rounded-full">
    </div>
  </a> -->
</nav>

<slot />

<style>
  .active {
    color: var(--accentGreen);
  }
  /* .dampen {
    filter:grayscale(30%);
  } */
</style>