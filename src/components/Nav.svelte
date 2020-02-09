<script>
  export let segment;
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
</style>

<nav>
  <!-- Skip nav link for better a11y -->
  <a href="#main" class="skip-to-main">Navigation überspringen</a>
  <ul>
    <!-- <li>
      <a class:selected={segment === undefined} href=".">home</a>
    </li>
    <li>
      <a class:selected={segment === 'about'} href="about">about</a>
    </li> -->

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li>
      <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>
    </li> -->
  </ul>
</nav>

<header class="fixed w-full z-10 top-0">
  <nav
    class="flex items-center justify-between flex-wrap bg-light py-x0p5 px-x1p5">
    <div class="relative flex justify-between flex-wrap w-full">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <a
          rel="prefetch"
          class:active={segment === 'index'}
          href="/"
          class="text-primary">
          <strong>
            Musikversicherung
            <span class="opacity-50">.com</span>
          </strong>
        </a>
        <a
          rel="prefetch"
          class:active={segment === 'anfrage'}
          href="/anfrage"
          class="text-primary">
          <strong>Jetzt anfragen</strong>
        </a>
        <a
          rel="prefetch"
          class:active={segment === 'faq'}
          href="/faq"
          class="text-primary">
          <strong>FAQ</strong>
        </a>
      </div>

      <!-- <input type="checkbox"
      class="burger-toggle flex items-center px-3 py-2 w-x1 h-x1 border rounded
      text-primary border-primary lg:hidden"> -->
      <!-- <svg
        class="fill-current h-3 w-3 lg:hidden"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg> -->
      <!-- </input> -->
      <div
        class="burger-menu-items w-full block lg:flex lg:items-center lg:w-auto
        hidden">
        <div class="text-sm lg:flex-grow">
          <a
            href="/anfrage"
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
