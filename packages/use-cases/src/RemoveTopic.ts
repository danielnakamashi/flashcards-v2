import { ITopicPersistence } from '@flashcards/services';

export interface IRemoveTopic {
  removeTopic(id: string): void;
}

class RemoveTopic implements IRemoveTopic {
  topicPersistence: ITopicPersistence;

  constructor(topicPersistence: ITopicPersistence) {
    this.topicPersistence = topicPersistence;
  }

  removeTopic(id: string): void {
    this.topicPersistence.removeTopic({ id });
  }
}

export { RemoveTopic };
