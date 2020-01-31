import { IRemoveTopic as IRemoveTopicInput } from '../../input';
import { IRemoveTopic as IRemoveTopicRepository } from '../../service';
import { IRemoveTopic as IRemoveTopicOutput } from '../../output';

class RemoveTopic implements IRemoveTopicInput {
  topicRepository: IRemoveTopicRepository;
  topicPresenter: IRemoveTopicOutput;

  constructor(topicRepository: IRemoveTopicRepository, topicPresenter: IRemoveTopicOutput) {
    this.topicRepository = topicRepository;
    this.topicPresenter = topicPresenter;
  }

  removeTopic(uid: string, topicId: string): void {
    this.topicRepository.removeTopic(uid, topicId).then(() => {
      this.topicPresenter.removeTopic(topicId);
    });
  }
}

export { RemoveTopic };
