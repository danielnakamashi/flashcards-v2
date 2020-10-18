import { Card } from '@flashcards/core';

export type IAddCardService = {
  addCard(
    { question, answer }: { question: string; answer: string },
    topicId: string,
    uid: string,
  ): Promise<Card>;
};
