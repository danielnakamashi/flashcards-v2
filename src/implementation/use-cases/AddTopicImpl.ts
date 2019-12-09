import { AddTopic } from 'core/use-cases/AddTopic';
import { TopicPersistence } from 'core/services/TopicPersistence';
import { TopicsPresenter } from 'core/presenters/TopicsPresenter';

class AddTopicImpl implements AddTopic {
  topicPersistence: TopicPersistence;
  topicsPresenter: TopicsPresenter;

  constructor(topicPersistence: TopicPersistence, topicsPresenter: TopicsPresenter) {
    this.topicPersistence = topicPersistence;
    this.topicsPresenter = topicsPresenter;
  }

  addTopic({ name }: { name: string }): void {
    this.topicPersistence.addTopic({ name }).then(topic => {
      this.topicsPresenter.addTopic(topic);
    });
  }
}

export { AddTopicImpl };
