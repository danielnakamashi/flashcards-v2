import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import { Topic } from '@flashcards/entities';
import { ITopicsPresenter } from '@flashcards/presenters';

const topicsStore = createStore<Topic[]>([]);
const showTopics = createEvent<Topic[]>('show topics');
const addTopic = createEvent<Topic>('add topic');
const removeTopic = createEvent<string>('remove topic');
const reset = createEvent<void>('reset topics');

topicsStore
  .on(showTopics, (_, topics) => topics)
  .on(addTopic, (topics, newTopic) => [...topics, newTopic])
  .on(removeTopic, (topics, topicId) => topics.filter(topic => topic.id !== topicId))
  .reset(reset);

const topicsPresenter: ITopicsPresenter = {
  showTopics,
  addTopic,
  removeTopic,
  useTopics: () => useStore(topicsStore),
  reset: () => {
    reset();
  },
};

export { topicsPresenter };
