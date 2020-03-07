<script>
  // Use context to get reviewData from layout
  import { getContext } from "svelte";
  const reviewData = getContext("reviewData");
  import ReviewItem from "../../components/ReviewItem.svelte";
  import StarRating from "../../components/StarRating.svelte";
</script>

<section class="px-x1p5 -mb-x3 md:-mb-x2">
  <h1 class="text-primary text-x6 leading-tight mb-x1 border-solid">
    Kundenmeinungen
  </h1>
  <div class="text-x1p5 md:text-x0p5 mb-x1p5">
    <StarRating rating={reviewData.averageRating} />
    {reviewData.averageRating} Sterne von {reviewData.count} Berwertungen
  </div>
  <div class="grid md:grid-cols-2 col-gap-x1 row-gap-x0p5">
    {#each reviewData.allReviews as review}
      <ReviewItem {review} />
    {/each}
  </div>
</section>

<!-- 
  itemscope
  itemprop="mainEntity"
  itemtype="https://schema.org/Question"
  class="text-x1p5 md:text-x0p5 md:flex-half md:px-x1">
  <div
    itemprop="name"
    class="w-full bg-transparent text-primary border-solid border-0 border-b-2
    border-primary py-x0p5 md:py-x0p25 mb-x0p5 md:mb-x0p25">
    {question}
  </div>
  <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
    <div
      itemprop="text"
      class=" mb-x2 md:mb-x1"
      contenteditable="false"
      bind:innerHTML={answer} />
  </div>
</div> -->
