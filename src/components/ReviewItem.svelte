<script>
  export let review;
  import StarRatingSimple from "./StarRatingSimple.svelte";
</script>

<div
  itemprop="review"
  itemscope
  itemtype="https://schema.org/Review"
  class="text-x2 md:text-x0p5 border-solid border-0 border-t-2 border-primary
  pt-x0p5 mb-x0p5 md:mb-x0p25">
  <div
    itemprop="itemReviewed"
    itemscope
    itemtype="https://schema.org/Service"
    class=" hidden">
    <span itemprop="name">Belmot Oldtimerversicherung</span>
  </div>
  <div class="flex items-center mb-x0p5 md:mb-x0p25 ">
    <span
      itemprop="reviewRating"
      itemscope
      itemtype="https://schema.org/Rating">
      <span itemprop="ratingValue" class="hidden">{review.rating}</span>
      <span itemprop="bestRating" class="hidden">5</span>
      <StarRatingSimple rating={review.rating} />
    </span>
    <span class="flex text-primary md:text-x0p25">
      &nbsp;von&nbsp;
      <span itemprop="author" itemscope itemtype="https://schema.org/Person">
        <p itemprop="name">{review.name}</p>
      </span>
      &nbsp;am&nbsp;
      <p itemprop="datePublished" content={review.microDataDate}>
        {review.date}
      </p>
    </span>
  </div>
  <p itemprop="reviewBody" class="mb-x0p5 md:mb-x0p25">
    {@html review.review}
  </p>
</div>
