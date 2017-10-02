export class AuthService {
  // token: string = '';
  public isLoggedIn = false;
  
  signUpUser(email: string, password: string) {
    this.isLoggedIn = true;
  }

  signinUser(email, password) {
    this.isLoggedIn = true;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  userLogout() {
    this.isLoggedIn = false;
  }
}