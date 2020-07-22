import { IShowTopicByIdInput } from '../../input';
import { IGetTopicByIdService } from '../../service';
import { IShowTopicOutput } from '../../output';

class ShowTopicUseCase implements IShowTopicByIdInput {
  topicRepository: IGetTopicByIdService;
  topicPresenter: IShowTopicOutput;

  constructor(topicRepository: IGetTopicByIdService, topicPresenter: IShowTopicOutput) {
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

export { ShowTopicUseCase };
