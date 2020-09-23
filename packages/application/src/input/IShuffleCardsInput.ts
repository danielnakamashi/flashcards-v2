import { Card } from '@flashcards/core';

export interface IShuffleCardsInput {
  shuffleCards(cards: Card[]): void;
}
