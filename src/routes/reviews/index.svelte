<script context="module">
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
</script>

<h1>Reviews</h1>

<div>
  {#each reviews as review}
    <p>{review.name}</p>
    <p>{review.date}</p>
    <p>{review.review}</p>
  {/each}
</div>
