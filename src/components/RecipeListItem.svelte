<script>
  import { createEventDispatcher } from "svelte";
  import recipesStore from "../store/recipes";

  import RecipeItem from "./RecipeItem.svelte";

  const dispatch = createEventDispatcher();
</script>

<div class="row">
  <div class="col-xs-12">
    <button class="btn btn-success">New Recipe</button>
  </div>
</div>
<hr />
<div class="row">
  <div class="col-xs-12">
    {#each $recipesStore as recipe, i}
      <RecipeItem {recipe} id={i} on:click={() => { dispatch('showdetails', recipe) } } />
    {/each}
  </div>
</div>
