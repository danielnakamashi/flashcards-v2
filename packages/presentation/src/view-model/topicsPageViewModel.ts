import { Store } from 'effector';
import { Topic } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { TopicsPagePresenter } from '../presenter/TopicsPagePresenter';

export type ITopicsPageViewModel = InputBoundary.IAddTopicInput &
  InputBoundary.IRemoveTopicInput &
  InputBoundary.IShowTopicsByUserInput & {
    getTopicsStore(): Store<Topic[]>;
  };

function topicsPageViewModel(
  topicsPagePresenter: TopicsPagePresenter,
  addTopic: InputBoundary.IAddTopicInput,
  removeTopic: InputBoundary.IRemoveTopicInput,
  showTopicsByUser: InputBoundary.IShowTopicsByUserInput,
): ITopicsPageViewModel {
  return {
    getTopicsStore: (): Store<Topic[]> => {
      return topicsPagePresenter.topicsStore;
    },
    addTopic: (topic: { name: string }, uid: string): Promise<void> => {
      return addTopic.addTopic(topic, uid);
    },
    removeTopic: (uid: string, topicId: string): void => {
      return removeTopic.removeTopic(uid, topicId);
    },
    showTopicsByUser: (uid: string): void => {
      return showTopicsByUser.showTopicsByUser(uid);
    },
  };
}

export { topicsPageViewModel };
