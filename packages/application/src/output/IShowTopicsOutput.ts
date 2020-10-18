import { Topic } from '@flashcards/core';

export type IShowTopicsOutput = {
  showTopics(topics: Topic[]): void;
};
