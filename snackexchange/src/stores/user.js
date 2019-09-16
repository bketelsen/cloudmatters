import { writable, get } from 'svelte/store';



function createUser() {
	const { subscribe, set, update } = writable({});

	return {
        subscribe,
        set: (u) => set(u),
        current: () => {
            if (typeof(Storage) !== "undefined") {
               return JSON.parse(window.localStorage.getItem('gotrue.user'));;
            }
        }
	};
}

export const user = createUser();