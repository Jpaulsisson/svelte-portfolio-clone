<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";

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
</nav>

<slot />

<style>
  .active {
    color: var(--accentGreen);
  }
</style>