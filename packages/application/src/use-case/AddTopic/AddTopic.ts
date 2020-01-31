import { IAddTopic as IAddTopicInput } from '../../input';
import { IAddTopic as IAddTopicRepository } from '../../service';
import { IAddTopic as IAddTopicOutput } from '../../output';

class AddTopic implements IAddTopicInput {
  topicRepository: IAddTopicRepository;
  topicsPresenter: IAddTopicOutput;

  constructor(topicRepository: IAddTopicRepository, topicsPresenter: IAddTopicOutput) {
    this.topicRepository = topicRepository;
    this.topicsPresenter = topicsPresenter;
  }

  async addTopic({ name }: { name: string }, uid: string): Promise<void> {
    const topic = await this.topicRepository.addTopic({ name }, uid);
    this.topicsPresenter.addTopic(topic);
  }
}

export { AddTopic };
