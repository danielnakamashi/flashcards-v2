import { InputBoundary, Service, OutputBoundary, UseCase } from '@flashcards/application';

class ShowTopicById implements InputBoundary.IShowTopicByIdInput {
  _useCase: InputBoundary.IShowTopicByIdInput;

  constructor(
    topicRepository: Service.IGetTopicByIdService,
    topicPresenter: OutputBoundary.IShowTopicOutput,
  ) {
    this._useCase = new UseCase.ShowTopicUseCase(topicRepository, topicPresenter);
  }

  showTopic(uid: string, topicId: string) {
    return this._useCase.showTopic(uid, topicId);
  }
}

export { ShowTopicById };
