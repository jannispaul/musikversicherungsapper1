<script>
  export let reviewData;

  import StarRating from "../StarRating.svelte";
  import ReviewItem from "../ReviewItem.svelte";

  let style = {
    styleStarWidth: 20,
    styleEmptyStarColor: "#000",
    styleFullStarColor: "#DB0086"
  };
</script>

<section class="p-x1p5 w-100 md:grid" id="reviews">
  <h2
    class="text-secondary text-x6 md:text-x6 mb-x1 md:leading-tight md:mb-x0p5
    font-medium">
    Alle zufrieden!
  </h2>
  <div class="text-x2 md:text-x0p5 grid gap-x1">
    <div>
      {reviewData.count} Bewertungen mit {reviewData.averageRating} Sternen
    </div>
    {#each reviewData.recentReviews as review}
      <ReviewItem {review} />
    {/each}
  </div>
  <a
    preload
    href="/reviews"
    class="reviews inline text-secondary bg-secondary-light inline-block
    inline-flex py-x0p5 px-x1 mt-x1 md:mt-0 md:py-x0p25 md:px-x0p5 md:order-1
    md:flex md:items-center text-x2 md:text-x0p5">
    Alle Bewertungen ansehen
  </a>
</section>
