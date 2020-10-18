import { Card } from '@flashcards/core';

export type IShowCardsOutput = {
  showCards(cards: Card[]): void;
};
