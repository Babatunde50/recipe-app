<script>
    import { onMount } from 'svelte'
    
    import RecipeListItem from '../../components/RecipeListItem.svelte';
	import { autoLogin } from '../../helpers/auth'

	onMount(() => {
		autoLogin();
	})

    
</script>


<svelte:head>
	<title>Recipes</title>
</svelte:head>

<div class="row">
    <div class="col-md-5">
        <RecipeListItem />
    </div>
    
</div>
