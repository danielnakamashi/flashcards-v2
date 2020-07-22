import { Topic } from '@flashcards/core';

export interface IAddTopicService {
  addTopic({ name }: { name: string }, uid: string): Promise<Topic>;
}
