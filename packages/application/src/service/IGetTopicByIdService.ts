import { Topic } from '@flashcards/core';

export interface IGetTopicByIdService {
  getTopicById(uid: string, topicId: string): Promise<Topic | null>;
}
