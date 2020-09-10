import { IShowTopicsByUserInput } from '../../input';
import { IGetTopicsByUserService } from '../../service';
import { IShowTopicsOutput } from '../../output';

class ShowTopicsUseCase implements IShowTopicsByUserInput {
  topicRepository: IGetTopicsByUserService;
  topicsPresenter: IShowTopicsOutput;

  constructor(topicRepository: IGetTopicsByUserService, topicsPresenter: IShowTopicsOutput) {
    this.topicRepository = topicRepository;
    this.topicsPresenter = topicsPresenter;
  }

  async showTopicsByUser(uid: string): Promise<void> {
    const topics = await this.topicRepository.getTopicsByUser(uid);
    this.topicsPresenter.showTopics(topics);
  }
}

export { ShowTopicsUseCase };
