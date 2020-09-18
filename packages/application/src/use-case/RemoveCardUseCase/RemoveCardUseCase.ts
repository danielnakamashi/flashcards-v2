import { IRemoveCardInput } from '../../input';
import { IRemoveCardService } from '../../service';
import { IRemoveCardOutput } from '../../output';

class RemoveCardUseCase implements IRemoveCardInput {
  cardRepository: IRemoveCardService;
  cardsPresenter: IRemoveCardOutput;

  constructor(cardRepository: IRemoveCardService, cardsPresenter: IRemoveCardOutput) {
    this.cardRepository = cardRepository;
    this.cardsPresenter = cardsPresenter;
  }

  async removeCard(uid: string, topicId: string, cardId: string): Promise<void> {
    await this.cardRepository.removeCard(uid, topicId, cardId);
    this.cardsPresenter.removeCard(cardId);
  }
}

export { RemoveCardUseCase };
