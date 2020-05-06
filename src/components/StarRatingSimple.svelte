<script>
  import { onMount } from "svelte";

  export let rating = 0;

  let totalStars = 5;
  export let style = {
    styleStarWidth: 20,
    styleEmptyStarColor: "#D0D0D0",
    styleFullStarColor: "#ffd219"
  };
</script>

<style>
  .star-rating {
    display: flex;
    align-items: center;
  }
  .star-container {
    display: flex;
  }
  .indicator {
    font-size: 2.5rem;
  }
</style>

<div class="star-container">
  <div class="star-rating">
    {#each Array(rating) as star}
      <svg
        viewBox="0 0 {style.styleStarWidth}
        {style.styleStarWidth}"
        class="star-svg w-x1 md:w-stars-md lg:w-x0p75"
        style="fill: {style.styleFullStarColor}">
        <polygon
          points="0.4758701958484366,6.951893788977833
          7.6345796040273575,6.774354893929491
          9.95580330823659,0.00009766785509235376
          12.336815696187243,6.753572363034571
          19.496814746451474,6.867826685577273
          13.80965192166062,11.21924248440888
          15.913550989931636,18.06411276517625
          10.01767867670538,13.999960932857963
          4.157960759531867,18.11606909241355
          6.201274101419407,11.252869325769078"
          style="" />
      </svg>
    {/each}
    {#each Array(totalStars - rating) as star}
      <svg
        viewBox="0 0 {style.styleStarWidth}
        {style.styleStarWidth}"
        class="star-svg w-x1 md:w-stars-md lg:w-x0p75"
        style="fill: {style.styleEmptyStarColor}">
        <polygon
          points="0.4758701958484366,6.951893788977833
          7.6345796040273575,6.774354893929491
          9.95580330823659,0.00009766785509235376
          12.336815696187243,6.753572363034571
          19.496814746451474,6.867826685577273
          13.80965192166062,11.21924248440888
          15.913550989931636,18.06411276517625
          10.01767867670538,13.999960932857963
          4.157960759531867,18.11606909241355
          6.201274101419407,11.252869325769078"
          style="" />
      </svg>
    {/each}
    {#if isIndicatorActive}
      <div class="indicator" itemprop="ratingValue">{rating}</div>
    {/if}
  </div>
</div>
