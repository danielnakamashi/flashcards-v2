import { createDomain, Store, Event } from 'effector';
import { Topic, User } from '@flashcards/core';
import { OutputBoundary } from '@flashcards/application';

export interface ITopicsPagePresenter
  extends OutputBoundary.IAddTopicOutput,
    OutputBoundary.IRemoveTopicOutput,
    OutputBoundary.IShowTopicsOutput,
    OutputBoundary.ISetUserOutput {
  readonly topicsStore: Store<Topic[]>;
  readonly userStore: Store<User | null>;
  reset: () => void;
}

class TopicsPagePresenter implements ITopicsPagePresenter {
  private _topicsStore: Store<Topic[]>;
  private _userStore: Store<User | null>;
  private _reset: Event<void>;
  private _showTopics: Event<Topic[]>;
  private _addTopic: Event<Topic>;
  private _removeTopic: Event<string>;
  private _setUser: Event<User | null>;

  constructor() {
    const domain = createDomain('topics page presenter');

    this._reset = domain.event<void>('reset topics page presenter');

    domain.onCreateStore((store) => store.reset(this._reset));

    this._showTopics = domain.event<Topic[]>('show topics');
    this._addTopic = domain.event<Topic>('add topic');
    this._removeTopic = domain.event<string>('remove topic');
    this._topicsStore = domain
      .store<Topic[]>([])
      .on(this._showTopics, (_, topics) => [...topics])
      .on(this._addTopic, (topics, newTopic) => [...topics, newTopic])
      .on(this._removeTopic, (topics, topicId) => topics.filter((topic) => topic.id !== topicId));

    this._setUser = domain.event<User | null>('set user');
    this._userStore = domain.store<User | null>(null).on(this._setUser, (_, user) => user);
  }

  addTopic(topic: Topic): void {
    this._addTopic(topic);
  }

  removeTopic(id: string): void {
    this._removeTopic(id);
  }

  showTopics(topics: Topic[]): void {
    this._showTopics(topics);
  }

  setUser(user: User | null): void {
    this._setUser(user);
  }

  reset(): void {
    this._reset();
  }

  get topicsStore(): Store<Topic[]> {
    return this._topicsStore;
  }

  get userStore(): Store<User | null> {
    return this._userStore;
  }
}

export { TopicsPagePresenter };
