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

  showTopicWithShuffledCards(uid: string, topicId: string): void {
    this.topicRepository.getTopicById(uid, topicId).then((topic) => {
      this.topicPresenter.showTopic(topic);
      this.topicPresenter.showCards(shuffleCards(topic?.cards ?? []));
    });
  }
}

export { ShowTopicWithShuffledCardsUseCase };
