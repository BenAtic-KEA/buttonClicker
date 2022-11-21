import { writable, readable } from "svelte/store";

export const personalCount = writable(0);

export const resetCount = writable(false);

