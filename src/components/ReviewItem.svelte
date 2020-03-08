<script>
  export let review;
  import StarRating from "./StarRating.svelte";
</script>

<div
  itemscope
  itemtype="https://schema.org/Review"
  class="text-x1p5 md:text-x0p5 md:flex-half">
  <div
    itemprop="itemReviewed"
    itemscope
    itemtype="https://schema.org/Restaurant"
    class="w-full bg-transparent border-solid border-0 border-t-2 border-primary
    pt-x0p5 mb-x0p5 md:mb-x0p25">
    <div class="flex items-center mb-x0p25 text-x1 md:text-x0p25">
      <span
        itemprop="reviewRating"
        itemscope
        itemtype="https://schema.org/Rating">
        <span itemprop="ratingValue" class="hidden ">{review.rating}</span>
        <StarRating rating={review.rating} />
      </span>
      <span class="flex text-primary ">
        &nbsp;von&nbsp;
        <span itemprop="author" itemscope itemtype="https://schema.org/Person">
          <p itemprop="name">{review.name}</p>
        </span>
        &nbsp;am&nbsp;
        <p>{review.date}</p>
      </span>
    </div>
    <p
      itemprop="reviewBody"
      class=""
      contenteditable="false"
      bind:innerHTML={review.review}>
      {review.review}
    </p>
  </div>
</div>
