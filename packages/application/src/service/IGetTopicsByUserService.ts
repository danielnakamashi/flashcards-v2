import { Topic } from '@flashcards/core';

export interface IGetTopicsByUserService {
  getTopicsByUser(uid: string): Promise<Topic[]>;
}
