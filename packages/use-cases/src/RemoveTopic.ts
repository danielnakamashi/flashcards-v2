import { ITopicRepository } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';

export interface IRemoveTopic {
  removeTopic(param: { uid: string; topicId: string }): void;
}

class RemoveTopic implements IRemoveTopic {
  topicRepository: ITopicRepository;
  topicPresenter: ITopicsPresenter;

  constructor(topicRepository: ITopicRepository, topicPresenter: ITopicsPresenter) {
    this.topicRepository = topicRepository;
    this.topicPresenter = topicPresenter;
  }

  removeTopic({ uid, topicId }: { uid: string; topicId: string }): void {
    this.topicRepository.removeTopic({ uid, topicId }).then(() => {
      this.topicPresenter.removeTopic(topicId);
    });
  }
}

export { RemoveTopic };
