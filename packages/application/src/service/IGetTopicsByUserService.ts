import { Topic } from '@flashcards/core';

export type IGetTopicsByUserService = {
  getTopicsByUser(uid: string): Promise<Topic[]>;
};
