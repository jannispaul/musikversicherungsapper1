<script>
  import StarRating from "../StarRating.svelte";
  import { getContext } from "svelte";
  const reviewData = getContext("reviewData");

  let style = {
    styleStarWidth: 20,
    styleEmptyStarColor: "#000",
    styleFullStarColor: "#DB0086"
  };
</script>

<section class="p-x1p5 w-100" id="reviews">
  <h2
    class="text-secondary text-x5 md:text-x6 mb-x1 md:leading-tight md:mb-x0p5
    font-medium">
    Alle zufrieden
  </h2>
  {reviewData.count} Bewertungen mit {reviewData.averageRating} Sternen
  {#each reviewData.recentReviews as review}
    <p>{review.name}</p>
    <StarRating rating={review.rating} />

    <p>{review.date}</p>
    <p>{review.review}</p>
  {/each}

</section>
