import { IGetUser, ILogout, ILogin } from '@flashcards/use-cases';
import { Enums as EntitiesEnum } from '@flashcards/entities';

class UserController implements IGetUser, ILogout, ILogin {
  private _getUserUseCase: IGetUser;
  private _logoutUseCase: ILogout;
  private _loginUseCase: ILogin;

  constructor(getUser: IGetUser, logoutUseCase: ILogout, loginUseCase: ILogin) {
    this._getUserUseCase = getUser;
    this._logoutUseCase = logoutUseCase;
    this._loginUseCase = loginUseCase;
  }

  getUser() {
    this._getUserUseCase.getUser();
  }

  logout() {
    this._logoutUseCase.logout();
  }

  loginWithProvider(provider: EntitiesEnum.SignInProvider) {
    this._loginUseCase.loginWithProvider(provider);
  }
}

export { UserController };
