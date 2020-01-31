import { Topic } from '@flashcards/core';

export interface IShowTopics {
  showTopics(topics: Topic[]): void;
}
