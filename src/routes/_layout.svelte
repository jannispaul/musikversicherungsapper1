<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  :global(body) {
    background: #f8f4ff;
    position: relative;
    hyphens: manual;
  }
  :global(main:focus) {
    outline: none;
  }
</style>

<Nav {segment} />

<main class="my-x3 relative z-0" id="main" tabindex="-1">
  <slot />
</main>
<Footer />
