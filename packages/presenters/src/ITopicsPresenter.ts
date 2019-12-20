import { Topic } from '@flashcards/entities';
import { Store } from 'effector';

export interface ITopicsPresenter {
  topicsStore: Store<Topic[]>;

  showTopics(topics: Topic[]): void;
  addTopic(topic: Topic): void;
  removeTopic(id: string): void;
  reset(): void;
}
