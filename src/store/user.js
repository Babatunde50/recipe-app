import { writable } from 'svelte/store';

function userStore() {
	const { subscribe, set, update } = writable(null);

	return {
		subscribe,
        loginUser: (user) => set(user),
        logoutUser: () => set(null)
	};
}

export default userStore();