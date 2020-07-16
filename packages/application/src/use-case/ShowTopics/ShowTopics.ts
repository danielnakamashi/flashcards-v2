import { IShowTopicsByUser } from '../../input';
import { IGetTopicsByUser } from '../../service';
import { IShowTopics } from '../../output';

class ShowTopics implements IShowTopicsByUser {
  topicRepository: IGetTopicsByUser;
  topicsPresenter: IShowTopics;

  constructor(topicRepository: IGetTopicsByUser, topicsPresenter: IShowTopics) {
    this.topicRepository = topicRepository;
    this.topicsPresenter = topicsPresenter;
  }

  showTopicsByUser(uid: string): void {
    this.topicRepository.getTopicsByUser(uid).then((topics) => {
      this.topicsPresenter.showTopics(topics);
    });
  }
}

export { ShowTopics };
