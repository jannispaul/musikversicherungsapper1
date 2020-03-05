<script context="module">
  export async function preload({ params, query }) {
    return this.fetch(`reviews.json`)
      .then(r => r.json())
      .then(reviews => {
        return { reviews };
      });
  }
</script>

<script>
  //   import Image from "svelte-image";
  import StarRating from "../StarRating.svelte";
  export let reviews;
  let averageRating =
    reviews.map(i => i.rating).reduce((a, b) => parseInt(a) + parseInt(b), 0) /
    reviews.length;

  let style = {
    styleStarWidth: 20,
    styleEmptyStarColor: "#000",
    styleFullStarColor: "#DB0086"
  };
</script>

<section class="p-x1p5 w-100">
  <h2 class="text-secondary text-x5 md:text-x5">Alle zufrieden</h2>
  {reviews.length} Bewertungen mit {averageRating} Sternen
  {#each reviews.slice(0, 2) as review}
    <p>{review.name}</p>
    <StarRating rating={review.rating} />

    <p>{review.date}</p>
    <p>{review.review}</p>
  {/each}

</section>
