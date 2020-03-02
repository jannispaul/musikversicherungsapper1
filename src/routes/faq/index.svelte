<script context="module">
  import Faq from "../../components/Faq.svelte";
  export async function preload({ params, query }) {
    return this.fetch(`faqs.json`)
      .then(r => r.json())
      .then(faqs => {
        // console.log(faqs);
        return { faqs };
      });
  }
</script>

<script>
  export let faqs;
  let averageRating =
    faqs.map(i => i.rating).reduce((a, b) => parseInt(a) + parseInt(b), 0) /
    faqs.length;
</script>

<h1>faqs</h1>
{faqs.length} Berwertungen mit {averageRating} Sternen
<div>
  {#each faqs as faq}
    <p>{faq.name}</p>
    <!-- <StarRating rating={faq.rating} /> -->

    <p>{faq.date}</p>
    <p>{faq.faq}</p>
  {/each}
</div>
