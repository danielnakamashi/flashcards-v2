import { useStore } from 'effector-react';
import { Card } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { TopicPagePresenter } from '../presenter/TopicPagePresenter';

export interface ITopicPageViewModel extends InputBoundary.IShowTopicById {
  useTopicName(): string;
  useCards(): Card[];
}

const createTopicPageViewModel = (
  topicPagePresenter: TopicPagePresenter,
  showTopicById: InputBoundary.IShowTopicById,
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
});

export { createTopicPageViewModel };
