<script>
  import { onMount } from "svelte";
  import SingleInstrument from "../../components/SingleInstrument.svelte";

  var currentTab = 0;
  $: type = undefined;
  let totalValue = undefined;
  let vorname = undefined;
  let nachname = undefined;
  let email = undefined;
  let validated = false;
  let nextTab = () => currentTab++;
  let prevTab = () => currentTab--;
  let instruments = [{ name: "", valueType: "Neuwert", value: "" }];

  function addInstrument() {
    const instrument = {
      name: "",
      valueType: "Neuwert",
      value: ""
    };
    instruments = [...instruments, instrument];
  }
  $: console.log(instruments);
  // let updateType = userChoice => (type = userChoice && console.log(type));

  // function lsWritable(key, type) {
  //   let initialValue = localStorage.getItem(key);
  //   if (type == "numeric") {
  //     initialValue = Number(initialValue);
  //   }
  //   const { subscribe, set } = writable(initialValue);

  //   return {
  //     subscribe,
  //     set: value => {
  //       localStorage.setItem(key, value);
  //       return set(value);
  //     }
  //   };
  // }

  onMount(() => {
    // let instrumentCount = 1; // Instrument counter starts with 1 instrument
    // let incrementInstrumentCount = () => instrumentCount++; // Increment instrument count
    var storageID = "form-auto-save"; // Var for cookie name
    var saved = localStorage.getItem(storageID); // Get existing data from localStorage
    saved = saved ? JSON.parse(saved) : {};
    // Save the insrumentCounter to it
    // saved.instrumentCount = instrumentCount;
    // Save the object back to localStorage
    localStorage.setItem(storageID, JSON.stringify(saved));

    //End of onMount
  });
</script>

<style>
  /* Mark input boxes that gets an error on validation: */
  input.invalid {
    background-color: #ffdddd;
  }

  .primary-button {
    margin-top: 3vw;
    border: 1px solid red;
    height: 5vw;
  }
  button:not(:disabled) {
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
  }
  /* button:hover {
    opacity: 0.8;
  } */

  :disabled {
    opacity: 0.5;
  }

  /* .single-instrument {
    display: flex;
  } */

  .switch {
    display: flex;
  }

  /* Input style */
  input[type="radio"] {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
  }

  input[type="radio"]:active ~ label {
    opacity: 1;
  }
  input {
    height: 5vw;
    padding: 1.5vw;
  }

  /* input[type="radio"]:checked ~ label {
    opacity: 1;
    border: 1px solid red;
  } */

  /* .active {
    opacity: 1;
    border: 1px solid red;
  } */
</style>

<form id="form" action="/" data-auto-save class=" text-x1 px-x1p5">
  <div class="px-x5">

    <!-- One "tab" for each step in the form: -->
    {#if currentTab == 0}
      <div class="tab" for="sinfonima">
        <p class="text-center">Schritt 1 von 3</p>
        <h2>Start:</h2>
        <div class="switch flex items-stretch">
          <p class=" flex-1 relative">
            <input
              type="radio"
              name="type"
              id="choice-sinfonima"
              bind:group={type}
              value="SINFONIMA" />
            <label
              for="choice-sinfonima"
              data-sinfonima
              class="block p-10"
              class:bg-primary={type === 'SINFONIMA'}>
              Akustische Instrumente
            </label>
          </p>
          <p class=" flex-1 relative">
            <input
              type="radio"
              name="type"
              id="choice-imsound"
              bind:group={type}
              value="IAMSOUND" />
            <label
              for="choice-imsound"
              data-imsound
              class="block p-10"
              class:bg-primary={type === 'IAMSOUND'}>
              Elektronische Instrumente & Equipment
            </label>
          </p>
        </div>
        {#if type == 'IAMSOUND'}
          <label id="totalValue">
            Gesamtwert der Instrumente
            <input name="totalValue" bind:value={totalValue} autofocus />
          </label>
        {/if}
      </div>
      <button
        type="button"
        id="nextBtn"
        on:click={nextTab}
        class="primary-button w-1/2 float-right"
        disabled={type != 'SINFONIMA' && !totalValue}>
        Weiter
      </button>
    {/if}
    {#if currentTab == 1}
      <div class="tab flex flex-col">
        <p class="text-center">Schritt 2 von 3</p>
        <h2>Persönliche Informationen:</h2>
        <label class="inline-flex flex-col ">
          Vorname
          <input name="vorname" bind:value={vorname} required autofocus />
        </label>
        <label class="inline-flex flex-col">
          Nachname
          <input name="nachname" bind:value={nachname} required />
        </label>
        <label class="inline-flex flex-col">
          E-Mail
          <input name="email" bind:value={email} required />
        </label>
      </div>
      <div class="grid gap-x0p5 grid-cols-2">
        <button
          type="button"
          id="prevBtn"
          on:click={prevTab}
          class="primary-button">
          Zurück
        </button>
        <button
          type="button"
          id="nextBtn"
          on:click={nextTab}
          class="primary-button "
          disabled={!vorname || !nachname || !email}>
          Weiter
        </button>
      </div>
    {/if}
    {#if currentTab == 2}
      <div class="tab">
        <p class="text-center">Schritt 3 von 3</p>
        {#if type == 'SINFONIMA'}
          <h2>Deine Instrumente:</h2>
          <div class="instrument-list">
            {#each instruments as instrument, index}
              <SingleInstrument bind:instrument {index} />
            {/each}

            <!-- <div class="single-instrument">
            <label>
              Instrument
              <input
                name="instrument"
                bind:value={instruments[0].name}
                autofocus />
            </label>
            <fieldset class="switch">
              <label for="Neuwert">
                <input
                  type="radio"
                  name="valueType"
                  bind:group={instruments[0].valueType}
                  value="Neuwert" />
                Neuwert
              </label>
              <label for="Zeitwert">
                <input
                  type="radio"
                  name="valueType"
                  bind:group={instruments[0].valueType}
                  value="Zeitwert" />
                Zeitwert
              </label>
            </fieldset>
            <label>
              Wert
              <input
                oninput="this.className = ''"
                name="value"
                bind:value={instruments[0].value} />
            </label>
          </div> -->
            <!-- <div class="single-instrument">
            <label>
              Instrument
              <input
                oninput="this.className = ''"
                name="instrument"
                autofocus />
            </label>
            <div class="switch">
              <p class="">
                <input
                  type="radio"
                  name="match"
                  id="match_1"
                  value="neuwert"
                  checked />
                <label for="match_1">Neuwert</label>
              </p>
              <p class="">
                <input
                  type="radio"
                  name="match"
                  id="match_2"
                  value="zeitwert" />
                <label for="match_2">Zeitwert</label>
              </p>
            </div>
            <label>
              Wert
              <input oninput="this.className = ''" name="value" />
            </label>
          </div> -->
          </div>
          <button type="button" on:click={addInstrument}>
            Weiteres Instrument hinzufügen
          </button>
          <div class="grid gap-x0p5 grid-cols-2">
            <button
              type="primary-button"
              id="prevBtn"
              on:click={prevTab}
              class="primary-button">
              Zurück
            </button>
            <button type="submit" class="primary-button" disabled={false}>
              Absenden
            </button>
          </div>
        {/if}
        {#if type == 'IAMSOUND'}
          <div>
            <input type="radio" name="match" id="match_2" value="zeitwert" />
            <label for="match_2">Proberaum ...</label>
          </div>
          <button
            type="button"
            id="prevBtn"
            on:click={prevTab}
            class="primary-button">
            Zurück
          </button>
          <button type="submit" class="primary-button" disabled={false}>
            Absenden
          </button>
        {/if}
      </div>
    {/if}
  </div>
</form>
