<style>
  #main:focus {
    outline: 0;
  }
  :global(body) {
    background: #f8f5ff;
  }
</style>

<header
  class="w-full z-10 top-0 py-x1 md:py-x0p5 px-x1p5 text-primary md:text-x0p5
  flex justify-between">
  <a rel="prefetch" href="/" class=" ">
    <strong>
      Musikversicherung
      <span class="opacity-75 -ml-1">.com</span>
    </strong>
  </a>
  <a href="tel:+4951919313199">Tel.: 05191 931 31 99</a>

</header>
<main class="mb-x3 md:mb-x1 mt-x1 relative z-0">
  <slot />
</main>
