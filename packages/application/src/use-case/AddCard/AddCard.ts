import { IAddCard as IAddCardInput } from '../../input';
import { IAddCard as IAddCardRepository } from '../../service';
import { IAddCard as IAddCardOutput } from '../../output';

class AddCard implements IAddCardInput {
  cardRepository: IAddCardRepository;
  cardsPresenter: IAddCardOutput;

  constructor(cardRepository: IAddCardRepository, cardsPresenter: IAddCardOutput) {
    this.cardRepository = cardRepository;
    this.cardsPresenter = cardsPresenter;
  }

  async addCard(
    cardData: { question: string; answer: string },
    topicId: string,
    uid: string,
  ): Promise<void> {
    const card = await this.cardRepository.addCard(cardData, topicId, uid);
    this.cardsPresenter.addCard(card);
  }
}

export { AddCard };
