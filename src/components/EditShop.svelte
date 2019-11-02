<script>
    import ingredientsStore from '../store/ingredients'

    export let ingredient;

    $: name = ingredient ? ingredient.name : '';
    $: amount = ingredient ? ingredient.amount : '';

    const handleSubmit = (event) => {
        ingredientsStore.addIngredient(name, amount);
        name = '';
        amount = '';
    }


</script>


<div class="row">
  <div class="col-xs-12">
    <form on:submit|preventDefault={handleSubmit}>
      <div class="row">
        <div class="col-sm-5 form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            name="name"
            bind:value={name}
            required />
        </div>
        <div class="col-sm-2 form-group">
          <label for="amount">Amount</label>
          <input
            type="number"
            id="amount"
            class="form-control"
            name="amount"
            bind:value={amount}
            required />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <button disabled={!name || !amount }  class="btn btn-success" type="submit">Update</button>
          <button class="btn btn-danger" type="button">Delete</button>
          <button class="btn btn-primary" type="button">clear</button>
        </div>
      </div>
    </form>
  </div>
</div>
