import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import { Topic } from '@flashcards/entities';
import { ITopicsPresenter } from '@flashcards/presenters';

const topicsStore = createStore<Topic[]>([]);
const showTopics = createEvent<Topic[]>('show topics');
const addTopic = createEvent<Topic>('add topic');
const removeTopic = createEvent<string>('remove topic');

topicsStore.on(showTopics, (_, topics) => topics);
topicsStore.on(addTopic, (topics, newTopic) => [...topics, newTopic]);
topicsStore.on(removeTopic, (topics, topicId) => topics.filter(topic => topic.id !== topicId));

const topicsPresenter: ITopicsPresenter = {
  showTopics,
  addTopic,
  removeTopic,
  useTopics: () => useStore(topicsStore),
};

export { topicsStore, topicsPresenter };
