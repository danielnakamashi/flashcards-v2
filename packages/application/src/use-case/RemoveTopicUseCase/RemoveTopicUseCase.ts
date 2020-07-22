import { IRemoveTopicInput } from '../../input';
import { IRemoveTopicService } from '../../service';
import { IRemoveTopicOutput } from '../../output';

class RemoveTopicUseCase implements IRemoveTopicInput {
  topicRepository: IRemoveTopicService;
  topicPresenter: IRemoveTopicOutput;

  constructor(topicRepository: IRemoveTopicService, topicPresenter: IRemoveTopicOutput) {
    this.topicRepository = topicRepository;
    this.topicPresenter = topicPresenter;
  }

  removeTopic(uid: string, topicId: string): void {
    this.topicRepository.removeTopic(uid, topicId).then(() => {
      this.topicPresenter.removeTopic(topicId);
    });
  }
}

export { RemoveTopicUseCase };
