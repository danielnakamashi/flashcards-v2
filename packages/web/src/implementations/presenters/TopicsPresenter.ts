import { createStore, createEvent } from 'effector';
import { Topic } from '@flashcards/entities';
import { ITopicsPresenter } from '@flashcards/presenters';
import { useStore } from 'effector-react';

export interface ITopicsPresenterHook extends ITopicsPresenter {
  useTopics(): Topic[];
  reset(): void;
}

class TopicsPresenter implements ITopicsPresenterHook {
  _topicsStore = createStore<Topic[]>([]);
  _showTopics = createEvent<Topic[]>('show topics');
  _addTopic = createEvent<Topic>('add topic');
  _removeTopic = createEvent<string>('remove topic');
  _reset = createEvent<void>('reset topics');

  constructor() {
    this._topicsStore
      .on(this._showTopics, (_, topics) => topics)
      .on(this._addTopic, (topics, newTopic) => [...topics, newTopic])
      .on(this._removeTopic, (topics, topicId) => topics.filter(topic => topic.id !== topicId))
      .reset(this._reset);
  }

  addTopic(topic: Topic) {
    return this._addTopic(topic);
  }

  getTopics(): Topic[] {
    return this._topicsStore.getState();
  }

  removeTopic(id: string) {
    return this._removeTopic(id);
  }

  reset() {
    return this._reset();
  }

  showTopics(topics: Topic[]) {
    return this._showTopics(topics);
  }

  useTopics(): Topic[] {
    return useStore(this._topicsStore);
  }
}

export { TopicsPresenter };
