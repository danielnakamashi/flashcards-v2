import { GetUser } from '@flashcards/use-cases';
import { Logout } from '@flashcards/use-cases';
import { Login } from '@flashcards/use-cases';
import { Enums as EntitiesEnum } from '@flashcards/entities';

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

  loginWithProvider(provider: EntitiesEnum.SignInProvider) {
    this.loginUseCase.loginWithProvider(provider);
  }
}

export { UserController };
