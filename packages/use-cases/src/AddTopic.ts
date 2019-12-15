import { ITopicPersistence } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';

export interface IAddTopic {
  addTopic({ name }: { name: string }): void;
}

class AddTopic implements IAddTopic {
  topicPersistence: ITopicPersistence;
  topicsPresenter: ITopicsPresenter;

  constructor(topicPersistence: ITopicPersistence, topicsPresenter: ITopicsPresenter) {
    this.topicPersistence = topicPersistence;
    this.topicsPresenter = topicsPresenter;
  }

  addTopic({ name }: { name: string }): void {
    this.topicPersistence.addTopic({ name }).then(topic => {
      this.topicsPresenter.addTopic(topic);
    });
  }
}

export { AddTopic };
