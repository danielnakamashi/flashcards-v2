import { Card } from '@flashcards/core';

export interface IGetCardsByTopic {
  getCardsByTopic(uid: string, topicId: string): Promise<Card[]>;
}
