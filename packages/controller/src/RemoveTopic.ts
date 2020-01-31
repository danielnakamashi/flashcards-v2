import { InputBoundary, Service, OutputBoundary, UseCase } from '@flashcards/application';

class RemoveTopic implements InputBoundary.IRemoveTopic {
  _useCase: InputBoundary.IRemoveTopic;

  constructor(topicRepository: Service.IRemoveTopic, topicPresenter: OutputBoundary.IRemoveTopic) {
    this._useCase = new UseCase.RemoveTopic(topicRepository, topicPresenter);
  }

  removeTopic(uid: string, topicId: string) {
    return this._useCase.removeTopic(uid, topicId);
  }
}

export { RemoveTopic };
