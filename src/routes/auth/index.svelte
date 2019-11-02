<script>
  import { goto } from '@sapper/app';
  import { validateEmail, validatePassword } from "../../helpers/validate";
  import { handleLogin, handleError } from "../../helpers/auth";
  import { postData } from "../../helpers/http";

  let login = true;
  let email = "";
  let password = "";

  $: isEmailValid = validateEmail(email);
  $: isPasswordValid = validatePassword(password);

  const handleSubmit = async () => {
    if (!isEmailValid || !isPasswordValid) return;
    let url;
    if (login) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXY6U15JCOcP7oVi8DI6ONPA23Q67nKBI";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXY6U15JCOcP7oVi8DI6ONPA23Q67nKBI";
    }
    const userData = {
      email,
      password
    };
    try {
      const user = await postData(url, userData);
      handleLogin(user);
      console.log(user)
      goto('/recipes')
    } catch (error) {
      console.log(error)
     console.log(handleError(error));
    }
  };
</script>

<div class="row">
  <div class="col-xs-12 col-md-6 col-md-offset-3">
    <form on:submit|preventDefault={handleSubmit}>
      <div class="form-group">
        <label for="email">E-Mail</label>
        <input
          type="email"
          bind:value={email}
          id="email"
          class="form-control" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          bind:value={password}
          id="password"
          class="form-control" />
      </div>
      <div>
        <button
          type="submit"
          disabled={!isEmailValid || !isPasswordValid}
          class="btn btn-primary">
          {login ? 'Login' : 'Sign Up'}
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          on:click={() => (login = !login)}>
          Switch to {!login ? 'Login' : 'Sign Up'}
        </button>
      </div>
    </form>
  </div>
</div>
