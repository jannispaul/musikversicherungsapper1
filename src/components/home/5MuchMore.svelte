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
  export let paragraph1;
  export let paragraph2;
  export let headlineColor = "text-primary";
</script>

<section class="px-x1p5 py-x3 md:flex">
  <h2
    class="{headlineColor} font-medium text-x6 md:text-x2 flex-1 leading-tight
    md:mr-x0p5 mb-x1 ">
    {headline}
  </h2>
  <div class="flex-2 col-2 text-x2 md:flex md:text-x0p5 break-normal">
    <p class="flex-1 md:mr-x0p5" {headlineColor}>{paragraph1}</p>
    <p class="flex-1">{paragraph2}</p>
  </div>

</section>
