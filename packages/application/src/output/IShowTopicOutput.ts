import { Topic } from '@flashcards/core';

export interface IShowTopicOutput {
  showTopic(topic: Topic | null): void;
}
