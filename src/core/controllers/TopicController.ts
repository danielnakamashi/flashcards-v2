import { ShowTopics } from '../use-cases/ShowTopics';
import { AddTopic } from '../use-cases/AddTopic';

class TopicController {
  showTopicsUseCase: ShowTopics;
  addTopicUseCase: AddTopic;

  constructor(showTopics: ShowTopics, addTopic: AddTopic) {
    this.showTopicsUseCase = showTopics;
    this.addTopicUseCase = addTopic;
  }

  showTopics(uid: string) {
    this.showTopicsUseCase.showTopics(uid);
  }

  addTopic({ name }: { name: string }) {
    this.addTopicUseCase.addTopic({ name });
  }
}

export { TopicController };
