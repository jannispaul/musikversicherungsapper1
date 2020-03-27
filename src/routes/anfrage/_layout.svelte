<style>
  #main:focus {
    outline: 0;
  }
  :global(body) {
    background: #f8f5ff;
  }
</style>

<header class="w-full z-10 top-0 py-x1 md:py-x0p5 px-x1p5">
  <a rel="prefetch" href="/" class="text-primary md:text-x0p5">
    <strong>
      Musikversicherung
      <span class="opacity-75 -ml-1">.com</span>
    </strong>
  </a>
</header>
<main class="mb-x3 md:mb-x1 mt-x1 relative z-0">
  <slot />
</main>
