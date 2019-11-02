<script>
    import { onMount } from 'svelte'
    
    import RecipeListItem from '../../components/RecipeListItem.svelte';
    import RecipeDetails from '../../components/RecipeDetails.svelte';
	import { autoLogin } from '../../helpers/auth'

	onMount(() => {
		autoLogin();
	})

    let detailsShown = false;
    let recipe;

    function showDetails(event) {
        detailsShown = true;
        recipe = event.detail;
    }
    
</script>


<svelte:head>
	<title>Recipes</title>
</svelte:head>

<div class="row">
    <div class="col-md-5">
        <RecipeListItem on:showdetails={showDetails} />
    </div>
    {#if detailsShown}
        <div class="col-md-7">
            <RecipeDetails {recipe} />
        </div>
    {/if}
</div>
