import { Store } from 'effector';
import { Card } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { TopicStudyPagePresenter } from '../presenter/TopicStudyPagePresenter';

export type ITopicStudyPageViewModel = InputBoundary.IShowTopicByIdWithShuffledCardsInput &
  InputBoundary.IShuffleCardsInput & {
    getTopicNameStore(): Store<string>;
    getCardsStore(): Store<Card[]>;
  };

function topicStudyPageViewModel(
  topicStudyPagePresenter: TopicStudyPagePresenter,
  showTopicByIdUseCase: InputBoundary.IShowTopicByIdWithShuffledCardsInput,
  shuffleCardsUseCase: InputBoundary.IShuffleCardsInput,
): ITopicStudyPageViewModel {
  return {
    getTopicNameStore: (): Store<string> => {
      return topicStudyPagePresenter.topicNameStore;
    },
    getCardsStore: (): Store<Card[]> => {
      return topicStudyPagePresenter.cardsStore;
    },
    showTopicWithShuffledCards: (uid: string, topicId: string): void => {
      showTopicByIdUseCase.showTopicWithShuffledCards(uid, topicId);
    },
    shuffleCards: (cards: Card[]): void => {
      shuffleCardsUseCase.shuffleCards(cards);
    },
  };
}

export { topicStudyPageViewModel };
