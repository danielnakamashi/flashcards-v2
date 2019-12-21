import { ITopicRepository } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';

export interface IAddTopic {
  addTopic({ name }: { name: string }, uid: string): void;
}

class AddTopic implements IAddTopic {
  topicRepository: ITopicRepository;
  topicsPresenter: ITopicsPresenter;

  constructor(topicRepository: ITopicRepository, topicsPresenter: ITopicsPresenter) {
    this.topicRepository = topicRepository;
    this.topicsPresenter = topicsPresenter;
  }

  addTopic({ name }: { name: string }, uid: string): void {
    this.topicRepository.addTopic({ name }, uid).then(topic => {
      this.topicsPresenter.addTopic(topic);
    });
  }
}

export { AddTopic };
