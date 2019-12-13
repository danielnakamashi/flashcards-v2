import { GetUser } from '../use-cases/GetUser';
import { Logout } from '../use-cases/Logout';
import { Login } from '../use-cases/Login';
import { SignInProvider } from '../entities/enums/signin-provider';

class UserController {
  getUserUseCase: GetUser;
  logoutUseCase: Logout;
  loginUseCase: Login;

  constructor(getUser: GetUser, logoutUseCase: Logout, loginUseCase: Login) {
    this.getUserUseCase = getUser;
    this.logoutUseCase = logoutUseCase;
    this.loginUseCase = loginUseCase;
  }

  getUser() {
    this.getUserUseCase.get();
  }

  logout() {
    this.logoutUseCase.logout();
  }

  loginWithProvider(provider: SignInProvider) {
    this.loginUseCase.loginWithProvider(provider);
  }
}

export { UserController };
