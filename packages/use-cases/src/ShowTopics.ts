import { ITopicPersistence } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';

export interface IShowTopics {
  showTopics(uid: string): void;
}

class ShowTopics implements IShowTopics {
  topicPersistence: ITopicPersistence;
  topicsPresenter: ITopicsPresenter;

  constructor(topicPersistence: ITopicPersistence, topicsPresenter: ITopicsPresenter) {
    this.topicPersistence = topicPersistence;
    this.topicsPresenter = topicsPresenter;
  }

  showTopics(uid: string): void {
    this.topicPersistence.getTopics(uid).then(topics => {
      this.topicsPresenter.showTopics(topics);
    });
  }
}

export { ShowTopics };
