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

  showTopicsByUser(uid: string): void {
    this.topicRepository.getTopicsByUser(uid).then((topics) => {
      this.topicsPresenter.showTopics(topics);
    });
  }
}

export { ShowTopicsUseCase };
