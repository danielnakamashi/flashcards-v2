import { useStore } from 'effector-react';
import { Topic } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { TopicsPagePresenter } from '../presenter/TopicsPagePresenter';

export interface ITopicsPageViewModel
  extends InputBoundary.IAddTopic,
    InputBoundary.IRemoveTopic,
    InputBoundary.IShowTopicsByUser {
  useTopics(): Topic[];
}

const createTopicsPageViewModel = (
  topicsPagePresenter: TopicsPagePresenter,
  addTopic: InputBoundary.IAddTopic,
  removeTopic: InputBoundary.IRemoveTopic,
  showTopicsByUser: InputBoundary.IShowTopicsByUser,
): ITopicsPageViewModel => ({
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
});

export { createTopicsPageViewModel };
