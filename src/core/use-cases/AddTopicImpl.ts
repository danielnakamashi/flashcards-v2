import { AddTopic } from './AddTopic';
import { Topic } from '../entities/Topic';
import { TopicPersistence } from '../services/TopicPersistence';

class AddTopicImpl implements AddTopic {
  topicPersistence: TopicPersistence;

  constructor({ topicPersistence }: { topicPersistence: TopicPersistence }) {
    this.topicPersistence = topicPersistence;
  }

  addTopic({ name }: { name: string }): Promise<Topic> {
    return this.topicPersistence.addTopic({ name });
  }
}

export { AddTopicImpl };
