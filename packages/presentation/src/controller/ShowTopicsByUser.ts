import { InputBoundary, Service, OutputBoundary, UseCase } from '@flashcards/application';

class ShowTopicsByUser implements InputBoundary.IShowTopicsByUserInput {
  _useCase: InputBoundary.IShowTopicsByUserInput;

  constructor(
    topicRepository: Service.IGetTopicsByUserService,
    topicsPresenter: OutputBoundary.IShowTopicsOutput,
  ) {
    this._useCase = new UseCase.ShowTopicsUseCase(topicRepository, topicsPresenter);
  }

  showTopicsByUser(uid: string): void {
    this._useCase.showTopicsByUser(uid);
  }
}

export { ShowTopicsByUser };
