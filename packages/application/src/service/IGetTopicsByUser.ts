import { Topic } from '@flashcards/core';

export interface IGetTopicsByUser {
  getTopicsByUser(uid: string): Promise<Topic[]>;
}
