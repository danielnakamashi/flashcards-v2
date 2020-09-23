import { shuffleCards, Card } from '@flashcards/core';
import { IShuffleCardsInput } from '../../input/IShuffleCardsInput';
import { IShowCardsOutput } from '../../output';

class ShuffleCardsUseCase implements IShuffleCardsInput {
  private presenter: IShowCardsOutput;

  constructor(presenter: IShowCardsOutput) {
    this.presenter = presenter;
  }

  shuffleCards(cards: Card[]): void {
    this.presenter.showCards(shuffleCards(cards));
  }
}

export { ShuffleCardsUseCase };
