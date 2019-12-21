import { ITopicRepository } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';

export interface IShowTopics {
  showTopics(uid: string): void;
}

class ShowTopics implements IShowTopics {
  topicRepository: ITopicRepository;
  topicsPresenter: ITopicsPresenter;

  constructor(topicRepository: ITopicRepository, topicsPresenter: ITopicsPresenter) {
    this.topicRepository = topicRepository;
    this.topicsPresenter = topicsPresenter;
  }

  showTopics(uid: string): void {
    this.topicRepository.getTopics(uid).then(topics => {
      this.topicsPresenter.showTopics(topics);
    });
  }
}

export { ShowTopics };
