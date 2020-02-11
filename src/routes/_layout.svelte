<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>

</style>

<Nav {segment} />

<main class="my-x3" id="main" tabindex="-1">
  <slot />
</main>
<Footer />
