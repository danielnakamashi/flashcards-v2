import { ShowTopics } from '../use-cases/ShowTopics';
import { AddTopic } from '../use-cases/AddTopic';
import { RemoveTopicUseCase } from '../use-cases/RemoveTopicUseCase';

class TopicController implements ShowTopics, AddTopic, RemoveTopicUseCase {
  showTopicsUseCase: ShowTopics;
  addTopicUseCase: AddTopic;
  RemoveTopicUseCase: RemoveTopicUseCase;

  constructor(showTopics: ShowTopics, addTopic: AddTopic, removeTopicUseCase: RemoveTopicUseCase) {
    this.showTopicsUseCase = showTopics;
    this.addTopicUseCase = addTopic;
    this.RemoveTopicUseCase = removeTopicUseCase;
  }

  showTopics(uid: string) {
    this.showTopicsUseCase.showTopics(uid);
  }

  addTopic({ name }: { name: string }) {
    this.addTopicUseCase.addTopic({ name });
  }

  removeTopic({ id }: { id: string }) {
    this.RemoveTopicUseCase.removeTopic({ id });
  }
}

export { TopicController };
