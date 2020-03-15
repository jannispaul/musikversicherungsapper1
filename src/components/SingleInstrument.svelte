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
  input[type="radio"] {
    opacity: 0;
  }
</style>

<div class="single-instrument flex items-end">
  <label class="flex flex-col items-start">
    Instrument
    <input
      name="instrument"
      type="text"
      bind:value={instrument.name}
      autofocus />
  </label>
  <!-- <Toggle
    type="radio"
    bind:group={instrument.valueType}
    value={instrument.valueType}
    let:checked /> -->

  <!-- <label for="Neuwert"> -->
  <label class:bg-primary={instrument.valueType === 'Neuwert'}>
    <input
      type="radio"
      name={'valueType' + index}
      bind:group={instrument.valueType}
      value="Neuwert" />
    Neuwert
  </label>
  <!-- <label for="Zeitwert"> -->
  <label class:bg-primary={instrument.valueType === 'Zeitwert'}>
    <input
      type="radio"
      name={'valueType' + index}
      bind:group={instrument.valueType}
      value="Zeitwert" />
    Zeitwert
  </label>

  <label class="flex flex-col">
    Wert
    <input name="value" bind:value={instrument.value} />
  </label>
</div>
