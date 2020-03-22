<script context="module">
  export async function preload({ params, query }) {
    return this.fetch(`reviews.json`)
      .then(r => r.json())
      .then(reviewData => {
        return { reviewData };
      });
  }
</script>

<script>
  export let reviewData;
  import Hero from "../components/home/1Hero.svelte";
  import Types from "../components/home/2Types.svelte";
  import AsItShouldBe from "../components/home/3AsItShouldBe.svelte";
  import RecentReviews from "../components/home/4RecentReviews.svelte";
  import MuchMore from "../components/home/5MuchMore.svelte";
  import Layout from "../routes/_layouts/layout.svelte";
</script>

<svelte:head>
  <title>Musikversicherung.com</title>
</svelte:head>
<Layout>
  <Hero {reviewData} />
  <Types />
  <AsItShouldBe />
  <RecentReviews {reviewData} />
  <MuchMore />
</Layout>
