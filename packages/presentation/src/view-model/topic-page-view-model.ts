import { Store } from 'effector';
import { Card } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { TopicPagePresenter } from '../presenter/TopicPagePresenter';

export interface ITopicPageViewModel
  extends InputBoundary.IShowTopicByIdInput,
    InputBoundary.IAddCardInput {
  getTopicNameStore(): Store<string>;
  getCardsStore(): Store<Card[]>;
}

function topicPageViewModel(
  topicPagePresenter: TopicPagePresenter,
  showTopicById: InputBoundary.IShowTopicByIdInput,
  addCard: InputBoundary.IAddCardInput,
): ITopicPageViewModel {
  return {
    getTopicNameStore: (): Store<string> => {
      return topicPagePresenter.topicNameStore;
    },
    getCardsStore: (): Store<Card[]> => {
      return topicPagePresenter.cardsStore;
    },
    showTopic: (uid: string, topicId: string): void => {
      return showTopicById.showTopic(uid, topicId);
    },
    addCard: (
      cardData: { question: string; answer: string },
      topicId: string,
      uid: string,
    ): Promise<void> => {
      return addCard.addCard(cardData, topicId, uid);
    },
  };
}

export { topicPageViewModel };
