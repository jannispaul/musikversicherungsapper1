<script>
  export let segment;
  let expanded = false;
</script>

<style>
  .skip-to-main {
    left: -999px;
    position: absolute;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -999;
  }
  .skip-to-main:focus,
  .skip-to-main:active {
    color: #fff;
    background-color: #000;
    left: auto;
    top: auto;
    width: 30%;
    height: auto;
    overflow: auto;
    margin: 10px 35%;
    padding: 5px;
    border-radius: 15px;
    border: 4px solid yellow;
    text-align: center;
    font-size: 1.2em;
    z-index: 999;
  }

  /* .burger-toggle {
    position: absolute;
    right: 0;
    background: none;
    opacity: 0;
    z-index: 10;
  }
  .burger-toggle:hover {
    cursor: pointer;
  }
  .burger-toggle:checked ~ .burger-menu-items {
    display: block;
  }
  .burger-svg {
    position: absolute;
    right: 0;
  } */
</style>

<header class="fixed w-full z-10 top-0">
  <a href="#main" class="skip-to-main">Navigation überspringen</a>
  <nav
    class="flex items-center justify-between flex-wrap bg-light py-x0p5 px-x1p5">
    <div class="relative flex justify-between flex-wrap w-full">
      <div
        class="flex justify-between flex-wrap w-full items-center flex-shrink-0
        text-white mr-6">
        <a
          rel="prefetch"
          class:active={segment === 'index'}
          href="."
          class="text-primary">
          <strong>
            Musikversicherung
            <span class="opacity-50">.com</span>
          </strong>
        </a>
        <button
          on:click={expanded === false ? () => (expanded = true) : () => (expanded = false)}
          aria-label="Menu">
          <svg
            class="fill-primary w-x1 h-x1 lg:hidden burger-svg"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <!-- <input
          type="checkbox"
          class="burger-toggle flex items-center px-3 py-2 w-x1 h-x1 border
          rounded text-primary border-primary lg:hidden" /> -->

        <div
          class="burger-menu-items w-full block lg:flex lg:items-center
          lg:w-auto {expanded === false ? 'hidden' : ''}">
          <div class="text-sm lg:flex-grow">
            <a
              rel="prefetch"
              class:active={segment === 'faq'}
              href="faq"
              class="block mt-4 lg:inline-block lg:mt-0 text-primary
              hover:text-primary mr-4">
              FAQ
            </a>
            <a
              rel="prefetch"
              class:active={segment === 'kontakt'}
              href="kontakt"
              class="block mt-4 lg:inline-block lg:mt-0 text-primary
              hover:text-primary mr-4">
              Kontakt
            </a>
          </div>
          <a
            href="anfrage"
            class="inline-block text-sm px-4 py-2 leading-none border rounded
            text-primary border-primary hover:border-transparent
            hover:text-light hover:bg-primary mt-4 lg:mt-0">
            Jetzt anfragen
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>
