<script>
    import ingredientsStore from '../../store/ingredients'
    import EditShop from '../../components/EditShop.svelte';

    let ingredients = []
    let ingredient = null;

    ingredientsStore.subscribe(ings => {
        ingredients = ings
    })

    const updateEdit = (id) => {
        ingredient = ingredients.find(ingredient => String(ingredient.id) === String(id))
        console.log(ingredient);
    }

</script>


<div class="row">
    <div class="col-xs-10">
        <EditShop {ingredient} />
        <hr>
        <ul class="list-group">
            {#each ingredients as ingredient (ingredient.id) }
                <span class="list-group-item" style="cursor: pointer;" on:click={() => updateEdit(ingredient.id) } >
                    { ingredient.name } ({ ingredient.amount })
                </span>
            {/each}
        </ul>
    </div>
</div>