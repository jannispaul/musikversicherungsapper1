<script>
  // Use context to get reviewData from layout
  import { getContext } from "svelte";
  const reviewData = getContext("reviewData");

  import StarRating from "../../components/StarRating.svelte";
</script>

<h1>Reviews</h1>
{reviewData.count} Berwertungen mit {reviewData.averageRating} Sternen
<div>
  {#each reviewData.allReviews as review}
    <p>{review.name}</p>
    <StarRating rating={review.rating} />

    <p>{review.date}</p>
    <p>{review.review}</p>
  {/each}
</div>
