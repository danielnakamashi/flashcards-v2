import { IRemoveTopicInput } from '../../input/IRemoveTopicInput';
import { IRemoveTopicRepository } from '../../service/IRemoveTopicRepository';
import { IRemoveTopicOutput } from '../../output/IRemoveTopicOutput';

class RemoveTopic implements IRemoveTopicInput {
  topicRepository: IRemoveTopicRepository;
  topicPresenter: IRemoveTopicOutput;

  constructor(topicRepository: IRemoveTopicRepository, topicPresenter: IRemoveTopicOutput) {
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
