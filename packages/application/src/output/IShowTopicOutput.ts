import { Topic } from '@flashcards/core';

export type IShowTopicOutput = {
  showTopic(topic: Topic | null): void;
};
