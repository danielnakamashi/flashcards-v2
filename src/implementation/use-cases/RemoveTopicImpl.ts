import { RemoveTopicUseCase } from 'core/use-cases/RemoveTopicUseCase';
import { TopicPersistence } from 'core/services/TopicPersistence';

class RemoveTopicImpl implements RemoveTopicUseCase {
  topicPersistence: TopicPersistence;

  constructor(topicPersistence: TopicPersistence) {
    this.topicPersistence = topicPersistence;
  }

  removeTopic(id: string): void {
    this.topicPersistence.removeTopic({ id });
  }
}

export { RemoveTopicImpl };
