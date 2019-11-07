<script>
    import { onMount } from 'svelte'
    
    import RecipeListItem from '../../components/RecipeListItem.svelte';
    import RecipeDetails from '../../components/RecipeDetails.svelte';
    import EditRecipe from '../../components/EditRecipe.svelte';
	import { autoLogin } from '../../helpers/auth'

	onMount(() => {
		autoLogin();
	})

    let detailsShown = false;
    let showEdit = false;
    let recipe;

    const showDetails = (event) => {
        detailsShown = true;
        showEdit = false;
        recipe = event.detail;
    }

    const editRecipe = () => {
        showEdit = true;
        detailsShown = false;
        console.log('This is the edit')
    }
    
</script>


<svelte:head>
	<title>Recipes</title>
</svelte:head>

<div class="row">
    <div class="col-md-5">
        <RecipeListItem on:newrecipe={editRecipe} on:showdetails={showDetails} />
    </div>
    {#if detailsShown}
        <div class="col-md-7">
            <RecipeDetails {recipe} />
        </div>
    {:else if showEdit }
        <div class="col-md-7">
            <EditRecipe />
        </div>
    {/if}
</div>
