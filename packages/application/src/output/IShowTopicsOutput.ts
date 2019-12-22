import { Topic } from '@flashcards/core';

export interface IShowTopicsOutput {
  showTopics(topics: Topic[]): void;
}
