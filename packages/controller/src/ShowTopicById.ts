import { InputBoundary, Service, OutputBoundary, UseCase } from '@flashcards/application';

class ShowTopicById implements InputBoundary.IShowTopicById {
  _useCase: InputBoundary.IShowTopicById;

  constructor(topicRepository: Service.IGetTopicById, topicPresenter: OutputBoundary.IShowTopic) {
    this._useCase = new UseCase.ShowTopic(topicRepository, topicPresenter);
  }

  showTopic(uid: string, topicId: string) {
    return this._useCase.showTopic(uid, topicId);
  }
}

export { ShowTopicById };
