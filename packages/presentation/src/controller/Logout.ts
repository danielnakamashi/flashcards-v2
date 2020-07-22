import { InputBoundary, Service, OutputBoundary, UseCase } from '@flashcards/application';

class Logout implements InputBoundary.ILogoutInput {
  _useCase: InputBoundary.ILogoutInput;

  constructor(
    userAuthentication: Service.ILogoutService,
    userPresenter: OutputBoundary.ISetUserOutput,
  ) {
    this._useCase = new UseCase.LogoutUseCase(userAuthentication, userPresenter);
  }

  logout() {
    return this._useCase.logout();
  }
}

export { Logout };
