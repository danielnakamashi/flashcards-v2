import { InputBoundary, Service, OutputBoundary, UseCase } from '@flashcards/application';

class GetCurrentUser implements InputBoundary.IGetCurrentUser {
  _useCase: InputBoundary.IGetCurrentUser;

  constructor(userAuthentication: Service.IGetUser, userPresenter: OutputBoundary.ISetUser) {
    this._useCase = new UseCase.GetUser(userAuthentication, userPresenter);
  }

  getCurrentUser() {
    return this._useCase.getCurrentUser();
  }
}

export { GetCurrentUser };
