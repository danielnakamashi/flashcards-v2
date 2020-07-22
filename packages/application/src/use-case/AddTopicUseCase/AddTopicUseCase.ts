import { IAddTopicInput } from '../../input';
import { IAddTopicService } from '../../service';
import { IAddTopicOutput } from '../../output';

class AddTopicUseCase implements IAddTopicInput {
  topicRepository: IAddTopicService;
  topicsPresenter: IAddTopicOutput;

  constructor(topicRepository: IAddTopicService, topicsPresenter: IAddTopicOutput) {
    this.topicRepository = topicRepository;
    this.topicsPresenter = topicsPresenter;
  }

  async addTopic({ name }: { name: string }, uid: string): Promise<void> {
    const topic = await this.topicRepository.addTopic({ name }, uid);
    this.topicsPresenter.addTopic(topic);
  }
}

export { AddTopicUseCase };
