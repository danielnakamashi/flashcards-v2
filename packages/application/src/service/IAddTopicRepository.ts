import { Topic } from '@flashcards/core';

export interface IAddTopicRepository {
  addTopic({ name }: { name: string }, uid: string): Promise<Topic>;
}
