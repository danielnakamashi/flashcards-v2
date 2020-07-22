import { useStore } from 'effector-react';
import { Topic } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { TopicsPagePresenter } from '../presenter/TopicsPagePresenter';

export interface ITopicsPageViewModel
  extends InputBoundary.IAddTopicInput,
    InputBoundary.IRemoveTopicInput,
    InputBoundary.IShowTopicsByUserInput {
  useTopics(): Topic[];
}

function topicsPageViewModel(
  topicsPagePresenter: TopicsPagePresenter,
  addTopic: InputBoundary.IAddTopicInput,
  removeTopic: InputBoundary.IRemoveTopicInput,
  showTopicsByUser: InputBoundary.IShowTopicsByUserInput,
): ITopicsPageViewModel {
  return {
    useTopics: (): Topic[] => {
      return useStore(topicsPagePresenter.topicsStore);
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
