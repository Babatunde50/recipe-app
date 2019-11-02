<script>
    export let recipe;
</script>


<div class="row">
    <div class="col-xs-12">
        <img 
            src="{recipe.imagePath}" 
            alt="{recipe.name}"
            class="img-responsive" 
            style="max-height: 300px;" >
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        <h1> { recipe.name } </h1>
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        <div 
            class="btn-group"
            appDropdown>
            <button class="btn btn-primary dropdown-toggle">
                Manage Recipe <span class="caret"></span>
            </button>
            <!-- <ul class="dropdown-menu">
                <li><a
                    (click)="onAddToShoppingList()"
                    style="cursor: pointer;"
                    >To Shopping List</a></li>
                <li><a style="cursor: pointer;" (click)="onEditRecipe()" >Edit Recipe</a></li>
                <li><a style="cursor: pointer;" (click)="onDeleteRecipe()" >Delete Recipe</a></li>
            </ul> -->
        </div>
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        { recipe.description }
    </div>
    <div class="col-xs-12">
        <ul class="list-group">
            {#each recipe.ingredients as ingredient }
                <li class="list-group-item" > { ingredient.name } - { ingredient.amount } </li>
            {/each}
        </ul>
    </div>
</div>