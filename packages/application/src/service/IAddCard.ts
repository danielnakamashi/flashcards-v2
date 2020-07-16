import { Card } from '@flashcards/core';

export interface IAddCard {
  addCard(
    { question, answer }: { question: string; answer: string },
    topicId: string,
    uid: string,
  ): Promise<Card>;
}
