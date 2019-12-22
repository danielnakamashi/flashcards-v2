import { Topic } from '@flashcards/core';

export interface IShowTopicsRepository {
  getTopics(uid: string): Promise<Topic[]>;
}
