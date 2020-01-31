import { InputBoundary, Service, OutputBoundary, UseCase } from '@flashcards/application';

class Logout implements InputBoundary.ILogout {
  _useCase: InputBoundary.ILogout;

  constructor(userAuthentication: Service.ILogout, userPresenter: OutputBoundary.ISetUser) {
    this._useCase = new UseCase.Logout(userAuthentication, userPresenter);
  }

  logout() {
    return this._useCase.logout();
  }
}

export { Logout };
