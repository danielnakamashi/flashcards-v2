import { ITopicRepository } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';

export interface IRemoveTopic {
  removeTopic(id: string): void;
}

class RemoveTopic implements IRemoveTopic {
  topicPersistence: ITopicRepository;
  topicPresenter: ITopicsPresenter;

  constructor(topicPersistence: ITopicRepository, topicPresenter: ITopicsPresenter) {
    this.topicPersistence = topicPersistence;
    this.topicPresenter = topicPresenter;
  }

  removeTopic(id: string): void {
    this.topicPersistence.removeTopic(id).then(() => {
      this.topicPresenter.removeTopic(id);
    });
  }
}

export { RemoveTopic };
