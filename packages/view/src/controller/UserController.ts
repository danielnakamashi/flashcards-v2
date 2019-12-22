import { IGetUserInput, ILogoutInput, ILoginInput } from '@flashcards/application';
import { SignInProvider } from '@flashcards/core';

class UserController implements IGetUserInput, ILogoutInput, ILoginInput {
  private _getUserUseCase: IGetUserInput;
  private _logoutUseCase: ILogoutInput;
  private _loginUseCase: ILoginInput;

  constructor(getUser: IGetUserInput, logoutUseCase: ILogoutInput, loginUseCase: ILoginInput) {
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

  loginWithProvider(provider: SignInProvider) {
    this._loginUseCase.loginWithProvider(provider);
  }
}

export { UserController };
