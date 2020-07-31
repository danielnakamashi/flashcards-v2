import { InputBoundary, Service, OutputBoundary, UseCase } from '@flashcards/application';

class RemoveTopic implements InputBoundary.IRemoveTopicInput {
  _useCase: InputBoundary.IRemoveTopicInput;

  constructor(
    topicRepository: Service.IRemoveTopicService,
    topicPresenter: OutputBoundary.IRemoveTopicOutput,
  ) {
    this._useCase = new UseCase.RemoveTopicUseCase(topicRepository, topicPresenter);
  }

  removeTopic(uid: string, topicId: string): void {
    this._useCase.removeTopic(uid, topicId);
  }
}

export { RemoveTopic };
