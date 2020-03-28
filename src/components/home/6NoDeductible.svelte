<script>
  import Image from "svelte-image";
</script>

<style>
  @media (min-width: 768px) {
    section {
      grid-template-columns: calc(100vw * 1.5 / 27) repeat(9, 1fr) calc(
          100vw * 1.5 / 27
        );
      grid-template-rows: 6vw 30vw 6vw;
    }
    .content {
      background: linear-gradient(240.83deg, #db0086 4.06%, #960075 94.06%);
      grid-column: 2/6;
      grid-row: 1/4;
    }
    /* .shape {
      background: linear-gradient(228.42deg, #412b75 4.06%, #6b46c1 94.06%);
      grid-column: 8/27;
      grid-row: 1/13;
    }
    .image-guitar {
      grid-column: 5/10;
      grid-row: 8/12;
    } */
    .image {
      grid-column: 6/11;
      grid-row: 2/3;
    }
  }
  .bg-gradient {
    background: linear-gradient(240.83deg, #db0086 4.06%, #960075 94.06%);
  }
  @media (min-width: 768px) {
    .bg-gradient {
      background: none;
    }
  }
</style>

<section
  class="bg-gradient p-x1p5 py-x3 md:p-0 w-100 md:grid text-light"
  id="reviews">
  <div class="hidden md:block image overflow-hidden mh-100%">
    <Image src="images/drums.jpg" alt="" />
  </div>

  <div class="content p-x1 text-light md:relative md:z-10 md:flex flex-col">
    <h3
      class="text-x6 md:text-x1 mb-x1 leading-tight md:mb-x0p5 font-medium
      whitespace-no-wrap">
      Keine
      <wbr />
      Selbstbeteiligung
    </h3>
    <p class="text-x2 mb-x1 md:text-x0p5 md:mb-0">
      Mit einer Instrumentenversicherung müssen Sie sich nach einer Beschädigung
      keine Sorgen um die Reparaturkosten machen. Auch die Kosten für ein
      Leihinstrument während der Reparatur übernimmt die
      Instrumentenversicherung. Nach einem Verlust, zum Beispiel durch
      Diebstahl, hilft die Auszahlung der Versicherungssumme beim Kauf eines
      Ersatzinstrumentes. Bei der SINFONIMA-Instrumentenversicherung gibt es
      keine Selbstbeteiligung. Bei der I’M SOUND-Equipmentversicherung gilt nur
      für wenige Spezialfälle ein Selbstbehalt.
    </p>
  </div>

</section>
