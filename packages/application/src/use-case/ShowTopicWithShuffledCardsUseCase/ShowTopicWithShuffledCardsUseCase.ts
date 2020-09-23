import { shuffleCards } from '@flashcards/core';
import { IShowTopicByIdWithShuffledCardsInput } from '../../input';
import { IGetTopicByIdService } from '../../service';
import { IShowTopicOutput, IShowCardsOutput } from '../../output';

class ShowTopicWithShuffledCardsUseCase implements IShowTopicByIdWithShuffledCardsInput {
  topicRepository: IGetTopicByIdService;
  topicPresenter: IShowTopicOutput & IShowCardsOutput;

  constructor(
    topicRepository: IGetTopicByIdService,
    topicPresenter: IShowTopicOutput & IShowCardsOutput,
  ) {
    this.topicRepository = topicRepository;
    this.topicPresenter = topicPresenter;
  }

  async showTopicWithShuffledCards(uid: string, topicId: string): Promise<void> {
    const topic = await this.topicRepository.getTopicById(uid, topicId);
    this.topicPresenter.showTopic(topic);
    this.topicPresenter.showCards(shuffleCards(topic?.cards ?? []));
  }
}

export { ShowTopicWithShuffledCardsUseCase };
