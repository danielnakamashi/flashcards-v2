import { createStore, createEvent } from 'effector';
import { Topic } from '@flashcards/entities';
import { ITopicsPresenter } from '@flashcards/presenters';

const topicsStore = createStore<Topic[]>([]);
const showTopics = createEvent<Topic[]>('show topics');
const addTopic = createEvent<Topic>('add topic');

topicsStore.on(showTopics, (_, topics) => topics);
topicsStore.on(addTopic, (topics, newTopic) => [...topics, newTopic]);

const topicsPresenter: ITopicsPresenter = {
  showTopics,
  addTopic,
};

export { topicsStore, topicsPresenter };
