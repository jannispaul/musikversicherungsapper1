<script>
  import SingleInstrument from "../../components/SingleInstrument.svelte";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import Layout from "./_layout.svelte";
  // Create store
  let formData = writable({});

  // Set store to saved formData from localStorage or to defined object
  function initiateFormData() {
    formData.set(
      JSON.parse(localStorage.getItem("formData")) || {
        redirect: "/vielen-danke",
        versicherungsTyp: undefined,
        gesamtWert: undefined,
        vorname: undefined,
        nachname: undefined,
        email: undefined,
        status: undefined,
        wohnsitz: "Deutschland",
        nachricht: undefined,
        proberaum: undefined,
        anhanger: undefined,
        musikerhaftpflicht: undefined,
        verdientGeld: undefined,
        instruments: [{ name: "", valueType: "Neuwert", value: "" }]
      }
    );
  }
  initiateFormData();

  // Subscribe to store to update object saved in localStorage
  formData.subscribe(formData =>
    localStorage.setItem("formData", JSON.stringify(formData))
  );

  // Setup variables for multi step form
  let currentTab = 0;
  let termsAccepted = false;

  // Setup functions to navigate between tabs
  let nextTab = () => currentTab++;
  let prevTab = () => currentTab--;

  // Setup function to add an Instrument
  function addInstrument() {
    const instrument = {
      name: "",
      valueType: "Neuwert",
      value: ""
    };
    $formData.instruments = [...$formData.instruments, instrument];
  }
  function handleSubmit() {}
  onMount(function handleSubmit() {
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($formData),
      redirect: "follow"
    };

    fetch(
      "https://hook.integromat.com/rv3r5iqg3ivce8h16ld3b3v5h3vs9121",
      requestOptions
    )
      .then(response => response.text())
      // .then(result => console.log(result))
      // .then(localStorage.removeItem("formData")) // Remove formData from localstorage so form is empty
      .then(initiateFormData())
      .catch(error => console.log("error", error));
  });
</script>

<style>
  #form:focus {
    outline: 0;
  }
  :global(.primary-button),
  .add-instrument {
    margin-top: 3vw;
    background: rgba(107, 70, 193, 0.15);
    padding: 1.5vw;
  }

  :global(.primary-button:hover:not(:disabled)),
  :global(.add-instrument:hover:not(:disabled)) {
    background: rgba(107, 70, 193, 0.3);
  }
  :global(button:not(:disabled)) {
    cursor: pointer;
  }
  :global(button:disabled) {
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

  :global(input) {
    height: 5vw;
    min-height: fit-content;
    padding: 1.5vw;
    margin-bottom: 2vw;
    background: white;
    border: 0.2vw solid #6b46c1;
  }
  :global(textarea) {
    padding: 1.5vw;
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
    border: 1vw solid #6b46c1;
  }
  @media (min-width: 768px) {
    /* Input styles */
    :global(input) {
      height: 2vw;
      min-height: fit-content;
      padding: 0.75vw;
      margin-bottom: 2vw;
      background: white;
      border: 0.2vw solid #6b46c1;
    }

    :global(select) {
      height: 2vw;
      min-height: fit-content;
      padding: 0.75vw;
      margin-bottom: 2vw;
      border: 0.2vw solid #6b46c1;
    }

    :global(textarea) {
      padding: 0.75vw;
      border: 0.2vw solid #6b46c1;
    }
    /* TOggle indicator styles  */
    .indicator {
      height: 1.5vw;
      width: 1.5vw;
    }
    label.active .indicator {
      border: 0.5vw solid #6b46c1;
    }

    :global(.toggle > label) {
      border: 0.2vw solid #6b46c1;
    }

    :global(.primary-button) {
      margin-top: 3vw;
      background: none;
      padding: 1.5vw;
    }
    .primary-button:hover:not(:disabled) {
      /* background: rgba(107, 70, 193, 0.3); */
      background: none;
    }
    :global(select) {
      background-size: 1vw;
    }
  }
</style>

<Layout>
  <form id="form" method="post" class="text-x2 md:text-x1 lg:text-x0p5 px-x1p5">
    <div class=" ">
      <!-- One "tab" for each step in the form: -->
      {#if currentTab == 0}
        <div class="tab lg:w-4/6 lg:mx-auto" for="sinfonima">
          <p class="text-x0p5 md:text-x0p25">Schritt 1 von 3</p>
          <h2 class="text-x3 md:text-x2 text-primary mb-x1 leading-tighter">
            Was möchtest Du versichern?
          </h2>
          <div class="toggle inline md:flex md:items-stretch overflow-hidden">

            <label
              class="block p-x1 md:py-x0p25 md:px-x0p5 flex-1 flex md:mr-x1
              mb-x1 items-center"
              class:active={$formData.versicherungsTyp === 'SINFONIMA'}>
              <input
                type="radio"
                bind:group={$formData.versicherungsTyp}
                value="SINFONIMA" />
              <div class="flex items-center">
                <div class="indicator relative inline mr-x1 md:mr-x0p5" />
              </div>
              <span>Akustische Instrumente</span>
            </label>

            <label
              class="block p-x1 md:py-x0p25 md:px-x0p5 flex-1 flex mb-x1
              items-center"
              class:active={$formData.versicherungsTyp === 'IAMSOUND'}>

              <input
                type="radio"
                name="type"
                id="choice-imsound"
                bind:group={$formData.versicherungsTyp}
                value="IAMSOUND" />
              <div class="flex">
                <div class="indicator relative inline mr-x1 md:mr-x0p5" />
              </div>
              <span>Elektronische Instrumente & Equipment</span>

            </label>

          </div>
          {#if $formData.versicherungsTyp == 'IAMSOUND'}
            <label class="flex flex-col">
              Gesamtwert der Instrumente in €
              <input
                name="gesamtWert"
                bind:value={$formData.gesamtWert}
                autofocus />
            </label>
          {/if}
        </div>

        <div class="md:flex md:justify-center">
          <button
            type="button"
            id="nextBtn"
            on:click={nextTab}
            class="primary-button w-1/2 md:w-auto float-right "
            disabled={$formData.versicherungsTyp != 'SINFONIMA' && !$formData.gesamtWert}>
            Weiter
          </button>
        </div>
      {/if}
      {#if currentTab == 1}
        <div class="tab flex flex-col md:w-4/6 m-auto">
          <p class="">Schritt 2 von 3</p>
          <h2 class="text-x3 md:text-x2 text-primary mb-x1">
            Persönliche Informationen
          </h2>
          <div class="grid grid-cols-2 gap-x0p5">
            <label class="inline-flex flex-col ">
              Vorname
              <input
                name="vorname"
                bind:value={$formData.vorname}
                required
                autofocus />
            </label>
            <label class="inline-flex flex-col">
              Nachname
              <input name="nachname" bind:value={$formData.nachname} required />
            </label>
            <label class="inline-flex flex-col">
              E-Mail
              <input name="email" bind:value={$formData.email} required />
            </label>
            <label class="inline-flex flex-col">
              Status
              <select bind:value={$formData.status}>
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
              <input name="email" bind:value={$formData.wohnsitz} required />
            </label>
          </div>
        </div>
        <div class="grid gap-x0p5 grid-cols-2 md:flex md:justify-center">
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
            disabled={!$formData.vorname || !$formData.nachname || !$formData.email}>
            Weiter
          </button>
        </div>
      {/if}
      {#if currentTab == 2}
        <div class="tab lg:w-4/6 lg:mx-auto">
          <p class="">Schritt 3 von 3</p>
          {#if $formData.versicherungsTyp == 'SINFONIMA'}
            <h2 class="text-x3 md:text-x2 text-primary mb-x1">
              Deine Instrumente
            </h2>
            <div class="instrument-list">
              {#each $formData.instruments as instrument, index}
                <SingleInstrument bind:instrument {index} />
              {/each}
            </div>
            <button
              type="button"
              class="t-x1 p-x1 w-full -mt-x2 add-instrument"
              on:click={addInstrument}>
              Weiteres Instrument hinzufügen
            </button>
            <label for="" class="mt-x2 block">
              Anmerkungen & Fragen
              <textarea
                bind:value={$formData.nachricht}
                rows="4"
                class="w-full border-primary" />
            </label>
            <label class="flex items-center mt-x1">
              <input
                type="checkbox"
                name="terms"
                bind:checked={termsAccepted}
                class="mr-x1 md:mr-x0p5" />
              <span>
                Ich akzeptiere die Übertragung und Speicherung meiner Daten zum
                Zwecke des angebotenen Services.
                <a href="/datenschutz" class="underline">Mehr erfahren</a>
              </span>
            </label>

            <div class="grid gap-x0p5 grid-cols-2 md:flex md:justify-center">
              <button
                type="primary-button"
                id="prevBtn"
                on:click={prevTab}
                class="primary-button">
                Zurück
              </button>
              <button
                type="submit"
                class="primary-button"
                disabled={!termsAccepted}
                on:submit|preventDefault={handleSubmit}>
                Absenden
              </button>
            </div>
          {/if}
          {#if $formData.versicherungsTyp == 'IAMSOUND'}
            <div>
              <h2 class="text-x3 md:text-x2 text-primary mb-x1">
                Weitere Details
              </h2>
              <div class="inline flex flex-wrap md:items-stretch toggle ">
                <span class="w-full flex-0">
                  Ist ein Proberaum vorhanden? *
                </span>
                <label
                  class="block p-x1 flex-1 flex mr-x0p5 mb-x1 items-center"
                  class:active={$formData.proberaum === 'ja'}>
                  <input
                    type="radio"
                    bind:group={$formData.proberaum}
                    value="ja" />
                  <div class="flex items-center">
                    <div class="indicator relative inline mr-x1" />
                  </div>
                  <span>Ja</span>
                </label>
                <label
                  class="block p-x1 flex-1 flex md:mr-x1 mb-x1 items-center"
                  class:active={$formData.proberaum === 'nein'}>
                  <input
                    type="radio"
                    bind:group={$formData.proberaum}
                    value="nein" />
                  <div class="flex">
                    <div class="indicator relative inline mr-x1" />
                  </div>
                  <span>Nein</span>
                </label>
              </div>
              <div class="inline flex flex-wrap md:items-stretch toggle">
                <span class="w-full flex-0">
                  Wird das Equipment in einem Anhänger transportiert / gelagert?
                  *
                </span>
                <label
                  class="block p-x1 flex-1 flex mr-x0p5 mb-x1 items-center"
                  class:active={$formData.anhaenger === 'ja'}>
                  <input
                    type="radio"
                    bind:group={$formData.anhaenger}
                    value="ja" />
                  <div class="flex items-center">
                    <div class="indicator relative inline mr-x1" />
                  </div>
                  <span>Ja</span>
                </label>
                <label
                  class="block p-x1 flex-1 flex md:mr-x1 mb-x1 items-center"
                  class:active={$formData.anhaenger === 'nein'}>
                  <input
                    type="radio"
                    bind:group={$formData.anhaenger}
                    value="nein" />
                  <div class="flex">
                    <div class="indicator relative inline mr-x1" />
                  </div>
                  <span>Nein</span>
                </label>
              </div>
              <div class="inline flex flex-wrap md:items-stretch toggle">
                <span class="w-full flex-0">
                  Machst Du Deine Musik haupt- oder nebenberuflich, das heißt,
                  verdienst Du Geld damit? *
                </span>
                <label
                  class="block p-x1 flex-1 flex mr-x0p5 mb-x1 items-center"
                  class:active={$formData.verdientGeld === 'ja'}>
                  <input
                    type="radio"
                    bind:group={$formData.verdientGeld}
                    value="ja" />
                  <div class="flex items-center">
                    <div class="indicator relative inline mr-x1" />
                  </div>
                  <span>Ja</span>
                </label>
                <label
                  class="block p-x1 flex-1 flex md:mr-x1 mb-x1 items-center"
                  class:active={$formData.verdientGeld === 'nein'}>
                  <input
                    type="radio"
                    bind:group={$formData.verdientGeld}
                    value="nein" />
                  <div class="flex">
                    <div class="indicator relative inline mr-x1" />
                  </div>
                  <span>Nein</span>
                </label>
              </div>
              <div class="inline flex flex-wrap md:items-stretch toggle">
                <span class="w-full flex-0">
                  Möchtest Du zusätzlich ein individuelles Angebot für eine
                  Musikerhaftpflichtversicherung? *
                </span>
                <label
                  class="block p-x1 flex-1 flex mr-x0p5 mb-x1 items-center"
                  class:active={$formData.musikerhaftpflicht === 'ja'}>
                  <input
                    type="radio"
                    bind:group={$formData.musikerhaftpflicht}
                    value="ja" />
                  <div class="flex items-center">
                    <div class="indicator relative inline mr-x1" />
                  </div>
                  <span>Ja</span>
                </label>
                <label
                  class="block p-x1 flex-1 flex md:mr-x1 mb-x1 items-center"
                  class:active={$formData.musikerhaftpflicht === 'nein'}>
                  <input
                    type="radio"
                    bind:group={$formData.musikerhaftpflicht}
                    value="nein" />
                  <div class="flex">
                    <div class="indicator relative inline mr-x1" />
                  </div>
                  <span>Nein</span>
                </label>
              </div>
            </div>
            <label class="flex items-center mt-x1">
              <input
                type="checkbox"
                name="terms"
                bind:checked={termsAccepted}
                class="mr-x1" />
              <span>
                Ich akzeptiere die Übertragung und Speicherung meiner Daten zum
                Zwecke des angebotenen Services.
                <a href="/datenschutz" class="underline">Mehr erfahren</a>
              </span>
            </label>
            <div class="grid gap-x0p5 grid-cols-2 md:flex md:justify-center">
              <button
                type="button"
                id="prevBtn"
                on:click={prevTab}
                class="primary-button">
                Zurück
              </button>
              <button
                type="submit"
                class="primary-button"
                disabled={!termsAccepted}
                on:submit|preventDefault={handleSubmit}>
                Absenden
              </button>
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </form>
</Layout>
