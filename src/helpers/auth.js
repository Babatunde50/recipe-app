import userStore from "../store/user";

let tokenExpirationTimer;

export function handleLogin({ email, expiresIn, idToken, localId }) {
  if(!email || !expiresIn || !idToken || !localId ) return;
  const expirationDate = new Date((new Date().getTime() + +expiresIn) * 1000);
  const user = {
    email,
    userId: localId,
    token: idToken,
    expirationDate
  };
  userStore.loginUser(user);
  localStorage.setItem("userData", JSON.stringify(user));
  autoLogout( +expiresIn * 10000 )
}

export function handleError(errorRes) {
  let errorMessage = "An unknown error occurred!";
  if (!errorRes.error || !errorRes.error.error) {
    return errorMessage;
  }
  switch (errorRes.error.error.message) {
    case "EMAIL_EXISTS":
      errorMessage = "This email exists already";
      break;
    case "EMAIL_NOT_FOUND":
      errorMessage = "This email was not fount in our database";
      break;
    case "INVALID_PASSWORD":
      errorMessage = "Invalid Password";
      break;
    default:
      errorMessage = "Unknown Error";
  }
  return errorMessage;
}

export function handleLogout() {

    //this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    userStore.logoutUser()
    if(tokenExpirationTimer) {
      clearTimeout(tokenExpirationTimer);
    }
    tokenExpirationTimer = null
}

export function autoLogin() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if(!userData) return;

  const loadedUser = {
    email: userData.email,
    userId: userData.userId,
    token: userData.token,
    expirationDate: new Date(userData.expirationDate)
  }

  if(loadedUser.token) {
    userStore.loginUser(loadedUser)
    const expirationDuration = new Date(userData.expirationDate).getTime() - new Date().getTime();
    autoLogout(expirationDuration);
  }
}

export function autoLogout( expirationDuration) {
  tokenExpirationTimer = setTimeout(() => {
    handleLogout();
  }, expirationDuration)
}