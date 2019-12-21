import { IShowTopics } from '@flashcards/use-cases';
import { IAddTopic } from '@flashcards/use-cases';
import { IRemoveTopic } from '@flashcards/use-cases';

class TopicController implements IShowTopics, IAddTopic, IRemoveTopic {
  showTopicsUseCase: IShowTopics;
  addTopicUseCase: IAddTopic;
  removeTopicUseCase: IRemoveTopic;

  constructor(showTopics: IShowTopics, addTopic: IAddTopic, removeTopicUseCase: IRemoveTopic) {
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
