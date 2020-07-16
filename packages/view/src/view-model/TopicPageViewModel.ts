import { useStore } from 'effector-react';
import { Card } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { TopicPagePresenter } from '../presenter/TopicPagePresenter';

export interface ITopicPageViewModel extends InputBoundary.IShowTopicById, InputBoundary.IAddCard {
  useTopicName(): string;
  useCards(): Card[];
}

const createTopicPageViewModel = (
  topicPagePresenter: TopicPagePresenter,
  showTopicById: InputBoundary.IShowTopicById,
  addCard: InputBoundary.IAddCard,
): ITopicPageViewModel => ({
  useTopicName: (): string => {
    return useStore(topicPagePresenter.topicNameStore);
  },
  useCards: (): Card[] => {
    return useStore(topicPagePresenter.cardsStore);
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
});

export { createTopicPageViewModel };
