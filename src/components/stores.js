import { writable } from "svelte/store";

export const reviewData = writable({ count: 0, average: 0 });
