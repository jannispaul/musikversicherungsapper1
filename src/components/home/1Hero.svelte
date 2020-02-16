<script>
  import Image from "svelte-image";
  import StarRating from "../StarRating.svelte";

  let style = {
    styleStarWidth: 20,
    styleEmptyStarColor: "white",
    styleFullStarColor: "#DB0086"
  };
</script>

<style>
  .shape {
    height: 200px;
  }
  @media (min-width: 768px) {
    section {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(4, 100px);
    }
  }
  .image {
    grid-column: 7/13;
    grid-row: 2;
  }
  .content {
    grid-column: 1/7;
    grid-row: 1/4;
  }
</style>

<section class="px-x1p5 relative">
  <div class="content z-20">
    <a
      href="#reviews"
      class="inline text-secondary bg-secondary-light inline-block inline-flex
      py-x0p5 px-x1 mt-x3">
      <StarRating rating="5" {style} class="mr-x1" />
      <p>825 Bewertungen</p>
    </a>
    <h1 class="text-primary text-x7 md:text-x5 leading-none mt-x2 mb-x5 ">
      Versicherung für deine
      <span class="text-secondary">Instrumente</span>
      und
      <span class="text-secondary">Equipment</span>
    </h1>
  </div>
  <div class="image">
    <Image src="images/test.jpg" class="z-10 " />
  </div>
  <div
    class="bg-primary absolute w-6/12 h-64 right-0 bottom-0 mb-4 z-0 shape" />

  <a
    href="/anfrage"
    class="text-secondary underline text-x2 bg-white absolute left-0 p-x1 z-20
    bottom-0 shadow-2">
    Jetzt anfragen
  </a>

</section>
