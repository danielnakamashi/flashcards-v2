import { Topic } from '@flashcards/core';

export interface IGetTopicById {
  getTopicById(uid: string, topicId: string): Promise<Topic | null>;
}
