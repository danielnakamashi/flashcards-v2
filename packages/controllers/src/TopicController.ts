import { IShowTopics } from '@flashcards/use-cases';
import { IAddTopic } from '@flashcards/use-cases';
import { IRemoveTopic } from '@flashcards/use-cases';

export type ShowTopicsParams = string;

export type AddTopicParams = {
  name: string;
};

export type RemoveTopicParams = string;

class TopicController implements IShowTopics, IAddTopic, IRemoveTopic {
  showTopicsUseCase: IShowTopics;
  addTopicUseCase: IAddTopic;
  removeTopicUseCase: IRemoveTopic;

  constructor(showTopics: IShowTopics, addTopic: IAddTopic, removeTopicUseCase: IRemoveTopic) {
    this.showTopicsUseCase = showTopics;
    this.addTopicUseCase = addTopic;
    this.removeTopicUseCase = removeTopicUseCase;
  }

  showTopics(uid: ShowTopicsParams) {
    this.showTopicsUseCase.showTopics(uid);
  }

  addTopic({ name }: AddTopicParams, uid: string) {
    this.addTopicUseCase.addTopic({ name }, uid);
  }

  removeTopic(id: RemoveTopicParams) {
    this.removeTopicUseCase.removeTopic(id);
  }
}

export { TopicController };
