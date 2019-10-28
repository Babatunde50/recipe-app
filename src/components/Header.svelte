<script>
  import { onDestroy } from 'svelte'
  import { getData } from "../helpers/http";
  import { handleLogout  } from '../helpers/auth'
  import recipesStore from "../store/recipes";
  import userStore from "../store/user";

  let dropdownOpen = false;
  let unsubscribe

  let isAuth = false;

  const handleFetch = async () => {
    const url = "https://tunde-recipe.firebaseio.com/recipes.json";
    try {
      const recipes = await getData(url);
      const transformedRecipes = recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      });
      recipesStore.saveRecipes(transformedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const onLogout = () => {
    handleLogout();
  }

  unsubscribe = userStore.subscribe(userData => {
    isAuth = !!userData;
  })

  onDestroy(() => {
    unsubscribe();
  })
  

</script>

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a href="/" class="navbar-brand">Recipe Book</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
      {#if isAuth }
        <li>
          <a href="/recipes">Recipes</a>
        </li>
        <li>
          <a href="/shopping-list">Shopping List</a>
        </li>
      {/if}
      {#if !isAuth }
        <li>
          <a href="/auth">Authenticate</a>
        </li>
        {/if}
      </ul>
      {#if isAuth }
      <ul class="nav navbar-nav navbar-right">
        <li>
          <span href="/" style="cursor: pointer;" on:click={onLogout} >Logout</span>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown {dropdownOpen && 'open'}">
          <button
            style="cursor: pointer;"
            class="dropdown-toggle btn btn-link"
            role="button"
            on:click={() => (dropdownOpen = !dropdownOpen)}>
            Manage
            <span class="caret" />
          </button>
          <ul class="dropdown-menu">
            <li>
              <button class="btn btn-link" style="cursor: pointer;">
                Save Data
              </button>
            </li>
            <li>
              <button
                class="btn btn-link"
                style="cursor: pointer;"
                on:click={handleFetch}>
                Fetch Data
              </button>
            </li>
          </ul>
        </li>
      </ul>
      {/if}
    </div>
  </div>
</nav>
