import { InputBoundary, Service, OutputBoundary, UseCase } from '@flashcards/application';
import { SignInProvider } from '@flashcards/core';

class Login implements InputBoundary.ILogin {
  _useCase: InputBoundary.ILogin;

  constructor(userAuthentication: Service.ILogin, userPresenter: OutputBoundary.ISetUser) {
    this._useCase = new UseCase.Login(userAuthentication, userPresenter);
  }

  loginWithProvider(provider: SignInProvider) {
    return this._useCase.loginWithProvider(provider);
  }
}

export { Login };
