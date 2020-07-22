import { InputBoundary, Service, OutputBoundary, UseCase } from '@flashcards/application';

class GetCurrentUser implements InputBoundary.IGetCurrentUserInput {
  _useCase: InputBoundary.IGetCurrentUserInput;

  constructor(
    userAuthentication: Service.IGetUserService,
    userPresenter: OutputBoundary.ISetUserOutput,
  ) {
    this._useCase = new UseCase.GetUser(userAuthentication, userPresenter);
  }

  getCurrentUser() {
    return this._useCase.getCurrentUser();
  }
}

export { GetCurrentUser };
