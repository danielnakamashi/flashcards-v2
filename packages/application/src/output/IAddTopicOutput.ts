import { Topic } from '@flashcards/core';

export type IAddTopicOutput = {
  addTopic(topic: Topic): void;
};
