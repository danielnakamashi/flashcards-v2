import { IAddTopicInput } from '../../input/IAddTopicInput';
import { IAddTopicRepository } from '../../service/IAddTopicRepository';
import { IAddTopicOutput } from '../../output/IAddTopicOutput';

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
