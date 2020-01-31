import { createStore, createEvent, Store } from 'effector';
import { Topic, User } from '@flashcards/core';
import { OutputBoundary } from '@flashcards/application';

export interface ITopicsPagePresenter
  extends OutputBoundary.IAddTopic,
    OutputBoundary.IRemoveTopic,
    OutputBoundary.IShowTopics,
    OutputBoundary.ISetUser {
  readonly topicsStore: Store<Topic[]>;
  readonly userStore: Store<User | null>;
}

class TopicsPagePresenter implements ITopicsPagePresenter {
  _topicsStore = createStore<Topic[]>([]);
  _userStore = createStore<User | null>(null);
  _showTopics = createEvent<Topic[]>('show topics');
  _addTopic = createEvent<Topic>('add topic');
  _removeTopic = createEvent<string>('remove topic');
  _setUser = createEvent<User | null>('set user');

  constructor() {
    this._topicsStore
      .on(this._showTopics, (_, topics) => topics)
      .on(this._addTopic, (topics, newTopic) => [...topics, newTopic])
      .on(this._removeTopic, (topics, topicId) => topics.filter(topic => topic.id !== topicId));
    this._userStore.on(this._setUser, (_, user) => user);
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

  showTopics(topics: Topic[]) {
    return this._showTopics(topics);
  }

  setUser(user: User | null) {
    return this._setUser(user);
  }

  get topicsStore(): Store<Topic[]> {
    return this._topicsStore;
  }

  get userStore(): Store<User | null> {
    return this._userStore;
  }
}

export { TopicsPagePresenter };
