import { Card } from '@flashcards/core';

export type IShuffleCardsInput = {
  shuffleCards(cards: Card[]): void;
};
