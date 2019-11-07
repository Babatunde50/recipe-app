<script>
  import { createEventDispatcher } from "svelte";
  import recipesStore from "../store/recipes";

  import RecipeItem from "./RecipeItem.svelte";

  const dispatch = createEventDispatcher();

  const handleAdd = () => {
    dispatch('newrecipe')
    console.log('The Add buttton was clicked.')
  }
  
</script>

<div class="row">
  <div class="col-xs-12">
    <button class="btn btn-success" on:click={ handleAdd }>New Recipe</button>
  </div>
</div>
<hr />
<div class="row">
  <div class="col-12">
    {#each $recipesStore as recipe, i (recipe.id)}
      <RecipeItem {recipe} id={i} on:click={() => { dispatch('showdetails', recipe) } } />
    {/each}
  </div>
</div>
