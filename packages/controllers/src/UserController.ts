import { IGetUser, ILogout, ILogin } from '@flashcards/use-cases';
import { Enums as EntitiesEnum } from '@flashcards/entities';

class UserController {
  getUserUseCase: IGetUser;
  logoutUseCase: ILogout;
  loginUseCase: ILogin;

  constructor(getUser: IGetUser, logoutUseCase: ILogout, loginUseCase: ILogin) {
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
