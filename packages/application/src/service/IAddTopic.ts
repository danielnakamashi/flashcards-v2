import { Topic } from '@flashcards/core';

export interface IAddTopic {
  addTopic({ name }: { name: string }, uid: string): Promise<Topic>;
}
