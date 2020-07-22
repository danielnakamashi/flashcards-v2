import { InputBoundary, Service, OutputBoundary, UseCase } from '@flashcards/application';
import { SignInProvider } from '@flashcards/core';

class Login implements InputBoundary.ILoginInput {
  _useCase: InputBoundary.ILoginInput;

  constructor(
    userAuthentication: Service.ILoginService,
    userPresenter: OutputBoundary.ISetUserOutput,
  ) {
    this._useCase = new UseCase.LoginUseCase(userAuthentication, userPresenter);
  }

  loginWithProvider(provider: SignInProvider) {
    return this._useCase.loginWithProvider(provider);
  }
}

export { Login };
