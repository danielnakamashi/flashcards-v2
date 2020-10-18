import { Topic } from '@flashcards/core';

export type IGetTopicByIdService = {
  getTopicById(uid: string, topicId: string): Promise<Topic | null>;
};
