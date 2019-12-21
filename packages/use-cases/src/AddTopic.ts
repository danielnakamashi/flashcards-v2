import { ITopicRepository } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';

export interface IAddTopic {
  addTopic({ name }: { name: string }, uid: string): void;
}

class AddTopic implements IAddTopic {
  topicPersistence: ITopicRepository;
  topicsPresenter: ITopicsPresenter;

  constructor(topicPersistence: ITopicRepository, topicsPresenter: ITopicsPresenter) {
    this.topicPersistence = topicPersistence;
    this.topicsPresenter = topicsPresenter;
  }

  addTopic({ name }: { name: string }, uid: string): void {
    this.topicPersistence.addTopic({ name }, uid).then(topic => {
      this.topicsPresenter.addTopic(topic);
    });
  }
}

export { AddTopic };
