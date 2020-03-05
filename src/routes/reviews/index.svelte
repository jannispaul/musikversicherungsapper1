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
  import StarRating from "../../components/StarRating.svelte";
  export let reviewData;
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
