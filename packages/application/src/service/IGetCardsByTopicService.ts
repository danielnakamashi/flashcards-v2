import { Card } from '@flashcards/core';

export type IGetCardsByTopicService = {
  getCardsByTopic(uid: string, topicId: string): Promise<Card[]>;
};
