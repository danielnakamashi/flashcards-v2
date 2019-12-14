import { ShowTopics } from '../use-cases/ShowTopics';
import { AddTopic } from '../use-cases/AddTopic';
import { RemoveTopicUseCase } from '../use-cases/RemoveTopicUseCase';

export type ShowTopicsParams = string;

export type AddTopicParams = {
  name: string;
};

export type RemoveTopicParams = string;

class TopicController implements ShowTopics, AddTopic, RemoveTopicUseCase {
  showTopicsUseCase: ShowTopics;
  addTopicUseCase: AddTopic;
  RemoveTopicUseCase: RemoveTopicUseCase;

  constructor(showTopics: ShowTopics, addTopic: AddTopic, removeTopicUseCase: RemoveTopicUseCase) {
    this.showTopicsUseCase = showTopics;
    this.addTopicUseCase = addTopic;
    this.RemoveTopicUseCase = removeTopicUseCase;
  }

  showTopics(uid: ShowTopicsParams) {
    this.showTopicsUseCase.showTopics(uid);
  }

  addTopic({ name }: AddTopicParams) {
    this.addTopicUseCase.addTopic({ name });
  }

  removeTopic(id: RemoveTopicParams) {
    this.RemoveTopicUseCase.removeTopic(id);
  }
}

export { TopicController };
