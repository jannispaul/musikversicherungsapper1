<script>
  export let question;
  export let answer;
</script>

<div
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
</div>
