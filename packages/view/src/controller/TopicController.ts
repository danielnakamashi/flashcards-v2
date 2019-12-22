import { IShowTopicsInput, IAddTopicInput, IRemoveTopicInput } from '@flashcards/application';

class TopicController implements IShowTopicsInput, IAddTopicInput, IRemoveTopicInput {
  showTopicsUseCase: IShowTopicsInput;
  addTopicUseCase: IAddTopicInput;
  removeTopicUseCase: IRemoveTopicInput;

  constructor(
    showTopics: IShowTopicsInput,
    addTopic: IAddTopicInput,
    removeTopicUseCase: IRemoveTopicInput,
  ) {
    this.showTopicsUseCase = showTopics;
    this.addTopicUseCase = addTopic;
    this.removeTopicUseCase = removeTopicUseCase;
  }

  showTopics(uid: string) {
    this.showTopicsUseCase.showTopics(uid);
  }

  async addTopic({ name }: { name: string }, uid: string): Promise<void> {
    await this.addTopicUseCase.addTopic({ name }, uid);
  }

  removeTopic({ uid, topicId }: { uid: string; topicId: string }) {
    this.removeTopicUseCase.removeTopic({ uid, topicId });
  }
}

export { TopicController };
