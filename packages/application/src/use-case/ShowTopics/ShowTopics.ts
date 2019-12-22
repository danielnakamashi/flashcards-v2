import { IShowTopicsInput } from '../../input/IShowTopicsInput';
import { IShowTopicsRepository } from '../../service/IShowTopicsRepository';
import { IShowTopicsOutput } from '../../output/IShowTopicsOutput';

class ShowTopics implements IShowTopicsInput {
  topicRepository: IShowTopicsRepository;
  topicsPresenter: IShowTopicsOutput;

  constructor(topicRepository: IShowTopicsRepository, topicsPresenter: IShowTopicsOutput) {
    this.topicRepository = topicRepository;
    this.topicsPresenter = topicsPresenter;
  }

  showTopics(uid: string): void {
    this.topicRepository.getTopics(uid).then(topics => {
      this.topicsPresenter.showTopics(topics);
    });
  }
}

export { ShowTopics };
