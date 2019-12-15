import { Topic } from '@flashcards/entities';

export interface ITopicsPresenter {
  showTopics(topics: Topic[]): void;
  addTopic(topic: Topic): void;
}
