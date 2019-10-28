import { writable } from 'svelte/store';

function recipeStore() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
        saveRecipes: (recipes) => set(recipes)
	};
}

export default recipeStore();