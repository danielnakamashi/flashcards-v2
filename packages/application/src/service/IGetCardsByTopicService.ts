import { Card } from '@flashcards/core';

export interface IGetCardsByTopicService {
  getCardsByTopic(uid: string, topicId: string): Promise<Card[]>;
}
