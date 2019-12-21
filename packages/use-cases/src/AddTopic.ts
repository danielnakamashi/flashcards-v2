import { ITopicRepository } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';

export interface IAddTopic {
  addTopic({ name }: { name: string }, uid: string): Promise<void>;
}

class AddTopic implements IAddTopic {
  topicRepository: ITopicRepository;
  topicsPresenter: ITopicsPresenter;

  constructor(topicRepository: ITopicRepository, topicsPresenter: ITopicsPresenter) {
    this.topicRepository = topicRepository;
    this.topicsPresenter = topicsPresenter;
  }

  async addTopic({ name }: { name: string }, uid: string): Promise<void> {
    const topic = await this.topicRepository.addTopic({ name }, uid);
    this.topicsPresenter.addTopic(topic);
  }
}

export { AddTopic };
