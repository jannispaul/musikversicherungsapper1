// store.js
import { writable } from "svelte/store";

const createWritableStore = (key, startValue) => {
  const { subscribe, set } = writable(startValue);

  return {
    subscribe,
    set,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(JSON.parse(json));
      }

      subscribe(current => {
        localStorage.setItem(key, JSON.stringify(current));
      });
    }
  };
};

export const formData = createWritableStore("formData", {
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
  verdientGeld: undefined
  // instruments: [{ name: "", valueType: "Neuwert", value: "" }]
});
