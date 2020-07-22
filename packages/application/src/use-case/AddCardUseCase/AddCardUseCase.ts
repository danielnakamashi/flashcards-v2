import { IAddCardInput } from '../../input';
import { IAddCardService } from '../../service';
import { IAddCardOutput } from '../../output';

class AddCardUseCase implements IAddCardInput {
  cardRepository: IAddCardService;
  cardsPresenter: IAddCardOutput;

  constructor(cardRepository: IAddCardService, cardsPresenter: IAddCardOutput) {
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

export { AddCardUseCase };
