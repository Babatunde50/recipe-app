<script>
    import recipesStore from '../store/recipes'

    import RecipeItem from './RecipeItem.svelte';
</script>


<div class="row">
    <div class="col-xs-12">
        <button class="btn btn-success">New Recipe</button>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-xs-12">
        {#each $recipesStore as recipe}
            <RecipeItem {recipe} />
	    {/each}
    </div>
</div>
