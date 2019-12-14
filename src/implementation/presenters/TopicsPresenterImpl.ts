import { createStore, createEvent } from 'effector';
import { Topic } from 'core/entities/Topic';
import { TopicsPresenter } from 'core/presenters/TopicsPresenter';

const topicsStore = createStore<Topic[]>([]);
const showTopics = createEvent<Topic[]>('show topics');
const addTopic = createEvent<Topic>('add topic');

topicsStore.on(showTopics, (_, topics) => topics);
topicsStore.on(addTopic, (topics, newTopic) => [...topics, newTopic]);

const topicsPresenter: TopicsPresenter = {
  showTopics,
  addTopic,
};

export { topicsStore, topicsPresenter };
