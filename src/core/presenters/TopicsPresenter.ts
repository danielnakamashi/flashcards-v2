import { Topic } from '../entities/Topic';

export interface TopicsPresenter {
  showTopics(topics: Topic[]): void;
  addTopic(topic: Topic): void;
}
