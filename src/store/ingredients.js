import { writable } from 'svelte/store';

function ingredientsStore() {
	const { subscribe, set, update } = writable([
        {
            name: 'Tomato',
            amount: 50,
            id: Math.random().toString()
        }
    ]);

	return {
		subscribe,
        addIngredient: (name, amount) => update( ingredients => {
            const ingredient = {
                name,
                amount,
                id: Math.random().toString()
            }
            const updatedIngredient = [...ingredients, ingredient ];
            return updatedIngredient
        } )
	};
}

export default ingredientsStore();