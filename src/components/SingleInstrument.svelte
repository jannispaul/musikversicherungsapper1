<script>
  import Toggle from "./Toggle.svelte";
  //   export let name = "";
  //   export let valueType = "";
  //   export let value = "";
  export let instrument;
  export let index;
  //   export let index;
</script>

<style>
  /* input[type="radio"] {
    opacity: 0;
  } */
  .toggle > label {
    /* height: 5vw; */
    min-height: fit-content;
    padding: 1vw;
    margin-bottom: 2vw;
    border: 0.2vw solid red;
  }
</style>

<div class="single-instrument flex flex-wrap items-end mb-x1p5">
  <label class="flex flex-col items-start flex-none w-full">
    Instrument
    <input
      name="instrument"
      type="text"
      bind:value={instrument.name}
      class="w-full "
      autofocus />
  </label>
  <div class="toggle flex flex-1 order-2 ">
    <label class:active={instrument.valueType === 'Neuwert'} class="flex-1">
      <input
        type="radio"
        name={'valueType' + index}
        bind:group={instrument.valueType}
        value="Neuwert" />
      <span>Neuwert</span>
    </label>
    <!-- <label for="Zeitwert"> -->
    <label class:active={instrument.valueType === 'Zeitwert'} class="flex-1">
      <input
        type="radio"
        name={'valueType' + index}
        bind:group={instrument.valueType}
        value="Zeitwert" />
      Zeitwert
    </label>
  </div>

  <label class="flex flex-col flex-1 order-1 mr-x0p5">
    Wert
    <input name="value" bind:value={instrument.value} />
  </label>
</div>
