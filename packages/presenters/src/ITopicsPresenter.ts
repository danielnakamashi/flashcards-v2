import { Topic } from '@flashcards/entities';

export interface ITopicsPresenter {
  showTopics(topics: Topic[]): void;
  addTopic(topic: Topic): void;
  removeTopic(id: string): void;
  useTopics(): Topic[];
  reset(): void;
}