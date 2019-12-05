import { ShowTopics } from './ShowTopics';
import { TopicPersistence } from '../services/TopicPersistence';
import { TopicsPresenter } from '../presenters/TopicsPresenter';
import { UserPersistence } from '../services/UserPersistence';

class ShowTopicsImpl implements ShowTopics {
  topicPersistence: TopicPersistence;
  topicsPresenter: TopicsPresenter;
  userPersistence: UserPersistence;

  constructor(topicPersistence: TopicPersistence, topicsPresenter: TopicsPresenter, userPersistence: UserPersistence) {
    this.topicPersistence = topicPersistence;
    this.topicsPresenter = topicsPresenter;
    this.userPersistence = userPersistence;
  }

  async showTopics(uid: string): Promise<void> {
    const topics = await this.topicPersistence.showTopics(uid);
    this.topicsPresenter.showTopics(topics);
  }
}

export { ShowTopicsImpl };
