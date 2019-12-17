import { ITopicPersistence } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';

export interface IRemoveTopic {
  removeTopic(id: string): void;
}

class RemoveTopic implements IRemoveTopic {
  topicPersistence: ITopicPersistence;
  topicPresenter: ITopicsPresenter;

  constructor(topicPersistence: ITopicPersistence, topicPresenter: ITopicsPresenter) {
    this.topicPersistence = topicPersistence;
    this.topicPresenter = topicPresenter;
  }

  removeTopic(id: string): void {
    this.topicPersistence.removeTopic({ id }).then(() => {
      this.topicPresenter.removeTopic(id);
    });
  }
}

export { RemoveTopic };
