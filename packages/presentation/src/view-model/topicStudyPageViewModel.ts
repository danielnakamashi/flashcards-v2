import { Store } from 'effector';
import { Card } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { TopicStudyPagePresenter } from '../presenter/TopicStudyPagePresenter';

export interface ITopicStudyPageViewModel extends InputBoundary.IShowTopicByIdInput {
  getTopicNameStore(): Store<string>;
  getCardsStore(): Store<Card[]>;
}

function topicStudyPageViewModel(
  topicStudyPagePresenter: TopicStudyPagePresenter,
  showTopicById: InputBoundary.IShowTopicByIdInput,
): ITopicStudyPageViewModel {
  return {
    getTopicNameStore: (): Store<string> => {
      return topicStudyPagePresenter.topicNameStore;
    },
    getCardsStore: (): Store<Card[]> => {
      return topicStudyPagePresenter.cardsStore;
    },
    showTopic: async (uid: string, topicId: string): Promise<void> => {
      await showTopicById.showTopic(uid, topicId);
    },
  };
}

export { topicStudyPageViewModel };
