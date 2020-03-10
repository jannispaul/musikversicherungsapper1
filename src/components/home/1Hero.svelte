<script>
  // Use context to get reviewData from layout
  import { getContext } from "svelte";
  const reviewData = getContext("reviewData");

  import Image from "svelte-image";
  import StarRating from "../StarRating.svelte";

  let style = {
    styleStarWidth: 50,
    styleEmptyStarColor: "#EE97CC",
    styleFullStarColor: "#DB0086"
  };
</script>

<style>
  .shape {
    height: 200px;
    background: linear-gradient(248.64deg, #412b75 4.06%, #6b46c1 94.06%);
  }
  @media (min-width: 768px) {
    section {
      display: grid;
      grid-template-columns: calc(100vw * 1.5 / 27) repeat(24, 1fr) calc(
          100vw * 1.5 / 27
        );
      grid-template-rows: repeat(12, 3.5vw);
    }
    .content {
      grid-column: 2/14;
      grid-row: 2/7;
    }
    .image-piano {
      grid-column: 16/23;
      grid-row: 2/8;
    }
    .image-mixer {
      grid-column: 17/26;
      grid-row: 5/12;
    }
    .image-sax {
      grid-column: 14/19;
      grid-row: 6/10;
    }

    .shape {
      grid-column: 20/27;
      grid-row: 1/13;
      height: 100%;
      width: 100%;
    }
    .reviews p {
      width: 0;
      opacity: 0;
      transition: all 500ms;
      white-space: nowrap;
      overflow: hidden;
    }
    .reviews:hover p {
      opacity: 1;
      width: 12.5vw;
      transition: all 400ms;
    }
  }
</style>

<section class="px-x1p5 md:px-0 relative">
  <div class="content z-20 md:flex md:flex-wrap md:items-start">
    <a
      href="#reviews"
      class="reviews inline text-secondary bg-secondary-light inline-block
      inline-flex py-x0p5 px-x1 mt-x1 md:mt-0 md:py-x0p25 md:px-x0p5 md:order-1
      md:flex md:items-center">
      <StarRating rating={reviewData.averageRating} {style} />
      <p class="text-x2 md:text-x0p5 transition duration-500 ease-in-out ">
        &nbsp; {reviewData.count} Bewertungen
      </p>
    </a>
    <h1
      class="text-primary text-x7 md:text-x5 leading-none mt-x2 mb-x3 md:mb-x0p5
      md:mt-x0p5 md:order-0 font-medium">
      Versicherung für Deine
      <span class="text-secondary">Instrumente</span>
      und
      <span class="text-secondary">Equipment</span>
    </h1>
    <a
      href="/anfrage"
      class="cta text-secondary underline text-x2 bg-white absolute left-0 p-x1
      z-20 bottom-0 shadow-2 md:relative md:text-secondary md:bg-secondary-light
      md:inline-block md:inline-flex md:mt-0 md:py-x0p25 md:px-x0p5 md:text-x0p5
      md:order-2 md:ml-x0p25 md:flex md:items-center ">
      Jetzt anfragen
    </a>
  </div>
  <div class="z-20 overflow-hidden image-piano">
    <Image src="images/piano.jpg" />
  </div>
  <div class="z-10 overflow-hidden image-mixer hidden md:inline">
    <Image src="images/mixer.jpg" />
  </div>
  <div class="z-30 overflow-hidden image-sax hidden md:inline">
    <Image src="images/sax.jpg" />
  </div>

  <div
    class="shape bg-primary absolute w-6/12 h-64 right-0 bottom-0 mb-4 z-0
    md:relative md:mb-0" />

</section>
