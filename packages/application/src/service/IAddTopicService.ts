import { Topic } from '@flashcards/core';

export type IAddTopicService = {
  addTopic({ name }: { name: string }, uid: string): Promise<Topic>;
};
