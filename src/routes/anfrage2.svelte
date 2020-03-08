<script>
  import { onMount } from "svelte";
  var currentTab = 0;
  let type = undefined;

  let nextTab = () => currentTab++;
  let prevTab = () => currentTab--;

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

  function updateType(userChoice) {
    type = userChoice;
    console.log(type);
  }
  onMount(() => {
    let instrumentCount = 1; // Instrument counter starts with 1 instrument
    let incrementInstrumentCount = () => instrumentCount++; // Increment instrument count
    var storageID = "form-auto-save"; // Var for cookie name
    var saved = localStorage.getItem(storageID); // Get existing data from localStorage
    saved = saved ? JSON.parse(saved) : {};
    // Save the insrumentCounter to it
    saved.instrumentCount = instrumentCount;
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

  /* Hide all steps by default: */
  /* .tab {
    display: none;
  } */

  button {
    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }

  #prevBtn {
    background-color: #bbbbbb;
  }

  /* Make circles that indicate the steps of the form: */
  .step {
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbbbbb;
    border: none;
    border-radius: 50%;
    display: inline-block;
    opacity: 0.5;
  }

  .step.active {
    opacity: 1;
  }

  /* Mark the steps that are finished and valid: */
  .step.finish {
    background-color: #4caf50;
  }

  .single-instrument:first-of-type {
    display: none;
  }

  :disabled {
    background: gray;
    opacity: 0.8;
  }

  .single-instrument {
    display: flex;
  }

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

  input[type="radio"]:checked ~ label {
    opacity: 1;
    border: 1px solid red;
  }

  .active {
    opacity: 1;
    border: 1px solid red;
  }
</style>

<form id="form" action="/" data-auto-save>
  <h1>Anfrage:</h1>
  <!-- One "tab" for each step in the form: -->
  {#if currentTab == 0}
    <div class="tab" for="sinfonima">
      <p>Schritt 1 von 3</p>
      <h2>Start:</h2>
      <div class="switch flex items-stretch">
        <p class=" flex-1 relative">
          <input
            type="radio"
            name="type"
            id="choice-sinfonima"
            class=""
            bind:group={type}
            value={'SINFONIMA'}
            on:click={updateType('SINFONIMA')} />
          <label for="choice-sinfonima" data-sinfonima class="block p-10">
            Akustische Instrumente
          </label>
        </p>
        <p class=" flex-1 relative">
          <input
            type="radio"
            name="type"
            id="choice-imsound"
            bind:group={type}
            value={'IAMSOUND'}
            on:click={updateType('IAMSOUND')} />
          <label for="choice-imsound" data-imsound class="block p-10">
            Elektronische Instrumente & Equipment
          </label>
        </p>
      </div>
      {#if type == 'IAMSOUND'}
        <label id="totalValue" class="hidden">
          Gesamtwert der Instrumente
          <input oninput="this.className = ''" name="totalValue" />
        </label>
      {/if}
    </div>
  {/if}
  {#if currentTab == 1}
    <div class="tab">
      <p>Schritt 2 von 3</p>
      <h2>Persönliche Informationen:</h2>
      <label class="inline-flex flex-col">
        Vorname
        <input
          oninput="this.className = ''"
          name="vorname"
          required
          autofocus />
      </label>
      <label class="inline-flex flex-col">
        Nachname
        <input oninput="this.className = ''" name="nachname" required />
      </label>
      <label class="inline-flex flex-col">
        E-Mail
        <input oninput="this.className = ''" name="email" required />
      </label>
    </div>
  {/if}
  {#if currentTab == 3}
    <div class="tab">
      <p>Schritt 3 von 3</p>
      <h2>Instrumente:</h2>
      <div class="instrument-list">
        <div class="single-instrument">
          <label>
            Instrument
            <input oninput="this.className = ''" name="instrument" />
          </label>
          <fieldset class="switch">
            <label for="Neuwert">
              <input type="radio" name="valueType" value="Neuwert" />
              Neuwert
            </label>
            <label for="Zeitwert">
              <input type="radio" name="valueType" value="Zeitwert" />
              Zeitwert
            </label>
          </fieldset>
          <label>
            Wert
            <input oninput="this.className = ''" name="value" />
          </label>
        </div>
        <div class="single-instrument">
          <label>
            Instrument
            <input oninput="this.className = ''" name="instrument" autofocus />
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
              <input type="radio" name="match" id="match_2" value="zeitwert" />
              <label for="match_2">Zeitwert</label>
            </p>
          </div>
          <label>
            Wert
            <input oninput="this.className = ''" name="value" />
          </label>
        </div>
      </div>
      <button type="button" data-name="addInstrument">
        Weiteres Instrument hinzufügen
      </button>
    </div>
  {/if}
  <div style="overflow:auto;">
    <div style="float:right;">
      {#if currentTab >= 1}
        <button type="button" id="prevBtn" on:click={prevTab} class="button">
          Previous
        </button>
      {/if}
      {#if currentTab < 3}
        <button type="button" id="nextBtn" on:click={nextTab} class="button">
          Next
        </button>
      {/if}
      {#if currentTab == 3}
        <button type="submit" class="button">Absenden</button>
      {/if}
    </div>
  </div>
</form>
