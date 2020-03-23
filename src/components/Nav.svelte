<script>
  export let segment;
  let expanded = false;
</script>

<style>
  .skip-to-main:focus,
  .skip-to-main:active {
    color: #fff;
    background-color: #000;
    top: auto;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: max-content;
    height: auto;
    overflow: auto;
    margin-top: 10px;
    padding: 5px 15px;
    border: 4px solid yellow;
    text-align: center;
    z-index: 999;
  }
</style>

<header class="sticky w-full z-10 top-0 ">
  <a
    href="#main"
    class="skip-to-main absolute overflow-hidden z-0 w-1 h-1 text-x2 md:text-x1">
    Navigation überspringen
  </a>
  <nav
    class="flex items-center justify-between flex-wrap bg-light py-x1 md:py-x0p5
    px-x1p5">
    <div class="relative flex justify-between flex-wrap w-full">
      <div
        class="flex justify-between flex-wrap w-full items-center flex-shrink-0
        text-white mr-6">
        <a
          rel="prefetch"
          class:active={segment === 'index'}
          href="."
          class="text-primary md:text-x0p5">
          <strong>
            Musikversicherung
            <span class="opacity-75 -ml-1">.com</span>
          </strong>
        </a>
        <button
          on:click={expanded === false ? () => (expanded = true) : () => (expanded = false)}
          aria-label="Menu">
          <svg
            class="fill-primary w-x1 h-x1 md:hidden burger-svg"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div
          class="burger-menu-items w-full block mb-x1p5 md:mb-0 md:flex
          md:items-center md:w-auto {expanded === false ? 'hidden' : ''}">
          <div class=" md:text-x0p5 md:flex-grow">
            <a
              rel="prefetch"
              class:active={segment === 'faq'}
              href="faq"
              class="block mt-4 md:inline-block md:mt-0 text-primary
              hover:text-primary mr-x0p5">
              FAQ
            </a>
            <a
              rel="prefetch"
              class:active={segment === 'kontakt'}
              href="kontakt"
              class="block mt-4 md:inline-block md:mt-0 text-primary
              hover:text-primary mr-x0p5">
              Kontakt
            </a>
          </div>
          <a
            href="anfrage"
            class="inline-block md:text-x0p5 px-4 py-2 leading-none border-2
            text-primary border-primary hover:border-transparent
            hover:text-light hover:bg-primary mt-4 md:mt-0">
            Jetzt anfragen
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>
