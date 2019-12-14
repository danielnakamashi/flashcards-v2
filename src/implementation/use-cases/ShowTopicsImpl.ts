import { ShowTopics } from 'core/use-cases/ShowTopics';
import { TopicPersistence } from 'core/services/TopicPersistence';
import { TopicsPresenter } from 'core/presenters/TopicsPresenter';

class ShowTopicsImpl implements ShowTopics {
  topicPersistence: TopicPersistence;
  topicsPresenter: TopicsPresenter;

  constructor(topicPersistence: TopicPersistence, topicsPresenter: TopicsPresenter) {
    this.topicPersistence = topicPersistence;
    this.topicsPresenter = topicsPresenter;
  }

  showTopics(uid: string): void {
    this.topicPersistence.getTopics(uid).then(topics => {
      this.topicsPresenter.showTopics(topics);
    });
  }
}

export { ShowTopicsImpl };
