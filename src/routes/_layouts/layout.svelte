<script>
  // // Make reviewData available
  // export let reviewData;
  // // Use context to pass to components
  // import { setContext } from "svelte";
  // setContext("reviewData", reviewData);

  import CookieNotice from "../../components/CookieNotice.svelte";
  import Nav from "../../components/Nav.svelte";
  import Footer from "../../components/Footer.svelte";
  export let segment;
</script>

<style>
  :global(body) {
    background: #f8f5ff;
    position: relative;
    hyphens: manual;
  }
  :global(main:focus) {
    outline: none;
  }
</style>

<!-- <script context="module">
  // export async function preload({ params, query }) {
  //   return this.fetch(`reviews.json`)
  //     .then(r => r.json())
  //     .then(reviewData => {
  //       return { reviewData };
  //     });
  // }
</script> -->
<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>
<CookieNotice />
<Nav {segment} />

<main class="mb-x3 md:mb-x1 mt-x1 relative z-0" id="main">
  <slot />
</main>
<Footer />
