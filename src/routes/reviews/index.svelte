<script context="module">
  import StarRating from "../../components/StarRating.svelte";
  export async function preload({ params, query }) {
    return this.fetch(`reviews.json`)
      .then(r => r.json())
      .then(reviews => {
        // console.log(reviews);
        return { reviews };
      });
  }
</script>

<script>
  export let reviews;
  let averageRating =
    reviews.map(i => i.rating).reduce((a, b) => parseInt(a) + parseInt(b), 0) /
    reviews.length;
</script>

<h1>Reviews</h1>
{reviews.length} Berwertungen mit {averageRating} Sternen
<div>
  {#each reviews as review}
    <p>{review.name}</p>
    <StarRating rating={review.rating} />

    <p>{review.date}</p>
    <p>{review.review}</p>
  {/each}
</div>
