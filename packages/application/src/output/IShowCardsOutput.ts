import { Card } from '@flashcards/core';

export interface IShowCardsOutput {
  showCards(cards: Card[]): void;
}
