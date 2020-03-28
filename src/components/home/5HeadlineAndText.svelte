<script>
  // let headline = "Weit mehr als nur eine Hausratdeckung";
  // let paragraph1 =
  //   "Das kann zum Beispiel ein Sturz, Umfallen, ein Transportschaden – oder ein Verlust durch Diebstahl sein. In der Equipmentversicherung sind darüber hinaus auch Risiken gedeckt, die bei elektronischen Instrumenten und Geräten von Bedeutung sind – zum Beispiel Überspannungsschäden.";
  // let paragraph2 =
  //   "Das kann zum Beispiel ein Sturz, Umfallen, ein Transportschaden – oder ein Verlust durch Diebstahl sein. In der Equipmentversicherung sind darüber hinaus auch Risiken gedeckt, die bei elektronischen Instrumenten und Geräten von Bedeutung sind – zum Beispiel Überspannungsschäden.";
  // export let content = {
  //   headline: "",
  //   paragraph1: "",
  //   paragraph2: ""
  // };
  export let headline;
  export let paragraph;
  export let headlineColor = "text-primary";
</script>

<style>
  @media (min-width: 768px) {
    .col-2 {
      column-count: 2;
    }
  }
</style>

<section class="px-x1p5 py-x3 md:flex">
  <h2
    class="{headlineColor} font-medium text-x6 md:text-x2 flex-1 leading-tight
    md:mr-x0p5 mb-x1 ">
    {headline}
  </h2>
  <div class="flex-2 col-2 text-x2 md:flex md:text-x0p5 break-normal">
    <p class="col-2">{paragraph}</p>
  </div>

</section>
