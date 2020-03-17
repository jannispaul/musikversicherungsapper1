<script>
  import { onMount } from "svelte";
  import SingleInstrument from "../../components/SingleInstrument.svelte";

  var currentTab = 0;
  $: type = undefined;
  let totalValue = undefined;
  let vorname = undefined;
  let nachname = undefined;
  let email = undefined;
  let status = undefined;
  let wohnsitz = "Deutschland";
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
  // $: console.log(instruments);
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
  /* label:focus {
    border: 3px solid red;
  } */
  :global(.primary-button) {
    margin-top: 3vw;
    background: rgba(107, 70, 193, 0.15);
    padding: 1.5vw;
  }
  .primary-button:hover:not(:disabled) {
    background: rgba(107, 70, 193, 0.3);
  }
  button:not(:disabled) {
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
  }

  :disabled {
    opacity: 0.5;
  }

  /* Input style */
  :global(input[type="radio"]) {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
  }
  /* input[type="radio"]:active ~ label { */

  /* .indicator .radio {
    border-radius: 100%;
    background: white;
    height: 3vw;
    width: 3vw;
    border: 2px solid #6b46c1;
  } */
  /* .indicator .active .radio {
    background: #6b46c1;
  } */
  :global(input) {
    height: 5vw;
    min-height: fit-content;
    padding: 1.5vw;
    margin-bottom: 2vw;
    background: white;
    border: 0.2vw solid #6b46c1;
  }
  :global(select) {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: right 1vw top 50%;
    background-repeat: no-repeat;
    background-size: 2vw;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDZMNS42NTcuMzQzIDExLjMxNCA2SDB6bTAgMmw1LjY1NyA1LjY1N0wxMS4zMTQgOEgweiIgZmlsbD0iIzMzMyIvPjwvc3ZnPg==);
    background-color: white;
    height: 5vw;
    min-height: fit-content;
    padding: 1vw 1.5vw;
    margin-bottom: 2vw;
    /* background: white; */
    border: 0.2vw solid #6b46c1;
    border-radius: 0;
  }

  :global(.toggle > label) {
    border: 0.5vw solid #6b46c1;
    opacity: 0.5;
  }
  :global(label.active) {
    opacity: 1;
  }
  /* Create a custom radio button */
  .indicator {
    position: relative;
    height: 3vw;
    width: 3vw;
    border-radius: 100%;
    border: 0.2vw solid #6b46c1;
    border-radius: 100%;
    background: white;
  }
  label.active .indicator {
    /* background: #6b46c1; */
    border: 1.2vw solid #6b46c1;
  }
</style>

<form id="form" action="/" data-auto-save class=" text-x0p75 px-x1p5">
  <div class=" ">

    <!-- One "tab" for each step in the form: -->
    {#if currentTab == 0}
      <div class="tab" for="sinfonima">
        <p class="text-x0p5">Schritt 1 von 3</p>
        <h2 class="text-x3 text-primary mb-x1">Was möchtest Du versichern?</h2>
        <div class=" inline md:flex md:items-stretch toggle">

          <label
            for="choice-sinfonima"
            data-sinfonima
            class="block p-x1 flex-1 flex md:mr-x1 mb-x1 items-center"
            class:active={type === 'SINFONIMA'}>
            <input
              type="radio"
              name="type"
              id="choice-sinfonima"
              bind:group={type}
              value="SINFONIMA" />
            <div class="flex items-center">
              <div class="indicator relative inline mr-x0p5" />
            </div>
            <span>Akustische Instrumente</span>
          </label>

          <label
            for="choice-imsound"
            data-imsound
            class="block p-x1 flex-1 flex md:mr-x1 mb-x1 items-center"
            class:active={type === 'IAMSOUND'}>

            <input
              type="radio"
              name="type"
              id="choice-imsound"
              bind:group={type}
              value="IAMSOUND" />
            <span class="indicator relative inline mr-x0p5" />
            Elektronische Instrumente & Equipment
          </label>

        </div>
        {#if type == 'IAMSOUND'}
          <label class="flex flex-col">
            Gesamtwert der Instrumente in €
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
        <p class="">Schritt 2 von 3</p>
        <h2 class="text-x3 text-primary mb-x1">Persönliche Informationen</h2>
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
        <label class="inline-flex flex-col">
          Status
          <select bind:value={status} on:change={() => (answer = '')}>
            <option value="Hobbymusiker">Hobbymusiker</option>
            <option value="Berufsmusiker (selbstständig)">
              Berufsmusiker (selbstständig)
            </option>
            <option value="Berufsmusiker (angestellt)">
              Berufsmusiker (angestellt)
            </option>
            <option value="DJ">DJ</option>
            <option value="Homestudio">Homestudio</option>
            <option value="Produzent">Produzent</option>
            <option value="Sammler von Vintageinstrumenten">
              Sammler von Vintageinstrumenten
            </option>
            <option value="Musikstudent">Musikstudent</option>
          </select>
        </label>
        <label class="inline-flex flex-col">
          Wohnsitz in
          <input name="email" bind:value={wohnsitz} required />
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
        <p class="">Schritt 3 von 3</p>
        {#if type == 'SINFONIMA'}
          <h2 class="text-x3 text-primary mb-x1">Deine Instrumente</h2>
          <div class="instrument-list">
            {#each instruments as instrument, index}
              <SingleInstrument bind:instrument {index} />
            {/each}
          </div>
          <button
            type="button"
            class="t-x1 p-x1 primary-button w-full"
            on:click={addInstrument}>
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

          <div class="grid gap-x0p5 grid-cols-2">
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
          </div>
        {/if}
      </div>
    {/if}
  </div>
</form>
