import { InputBoundary, Service, OutputBoundary, UseCase } from '@flashcards/application';

class ShowTopicsByUser implements InputBoundary.IShowTopicsByUser {
  _useCase: InputBoundary.IShowTopicsByUser;

  constructor(
    topicRepository: Service.IGetTopicsByUser,
    topicsPresenter: OutputBoundary.IShowTopics,
  ) {
    this._useCase = new UseCase.ShowTopics(topicRepository, topicsPresenter);
  }

  showTopicsByUser(uid: string) {
    this._useCase.showTopicsByUser(uid);
  }
}

export { ShowTopicsByUser };
