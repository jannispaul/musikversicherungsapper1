<script>
  import Toggle from "./Toggle.svelte";
  //   export let name = "";
  //   export let valueType = "";
  //   export let value = "";
  export let instrument;
  export let index;
  //   export let index;
</script>

<div class="single-instrument">
  <label>
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
  <fieldset class="switch">
    <!-- <label for="Neuwert"> -->
    <label>
      <input
        type="radio"
        name={'valueType' + index}
        bind:group={instrument.valueType}
        value="Neuwert" />
      Neuwert
    </label>
    <!-- <label for="Zeitwert"> -->
    <label>
      <input
        type="radio"
        name={'valueType' + index}
        bind:group={instrument.valueType}
        value="Zeitwert" />
      Zeitwert
    </label>
  </fieldset>
  <label>
    Wert
    <input name="value" bind:value={instrument.value} />
  </label>
</div>
