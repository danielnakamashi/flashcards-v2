import { Card } from '@flashcards/core';

export interface IAddCardOutput {
  addCard(card: Card): void;
}
