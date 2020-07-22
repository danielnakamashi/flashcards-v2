import { Topic } from '@flashcards/core';

export interface IAddTopicOutput {
  addTopic(topic: Topic): void;
}
