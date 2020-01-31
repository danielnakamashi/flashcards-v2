import { IShowTopicById } from '../../input';
import { IGetTopicById } from '../../service';
import { IShowTopic as IShowTopicOutput } from '../../output';

class ShowTopic implements IShowTopicById {
  topicRepository: IGetTopicById;
  topicPresenter: IShowTopicOutput;

  constructor(topicRepository: IGetTopicById, topicPresenter: IShowTopicOutput) {
    this.topicRepository = topicRepository;
    this.topicPresenter = topicPresenter;
  }

  async showTopic(uid: string, topicId: string) {
    const topic = await this.topicRepository.getTopicById(uid, topicId);

    if (topic) {
      this.topicPresenter.showTopic(topic);
    }
  }
}

export { ShowTopic };
