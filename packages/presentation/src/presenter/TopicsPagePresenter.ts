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
  #topicsStore: Store<Topic[]>;
  #userStore: Store<User | null>;
  #reset: Event<void>;
  #showTopics: Event<Topic[]>;
  #addTopic: Event<Topic>;
  #removeTopic: Event<string>;
  #setUser: Event<User | null>;

  constructor() {
    const domain = createDomain('topics page presenter');

    this.#reset = domain.event<void>('reset topics page presenter');

    domain.onCreateStore((store) => store.reset(this.#reset));

    this.#showTopics = domain.event<Topic[]>('show topics');
    this.#addTopic = domain.event<Topic>('add topic');
    this.#removeTopic = domain.event<string>('remove topic');
    this.#topicsStore = domain
      .store<Topic[]>([])
      .on(this.#showTopics, (_, topics) => [...topics])
      .on(this.#addTopic, (topics, newTopic) => [...topics, newTopic])
      .on(this.#removeTopic, (topics, topicId) => topics.filter((topic) => topic.id !== topicId));

    this.#setUser = domain.event<User | null>('set user');
    this.#userStore = domain.store<User | null>(null).on(this.#setUser, (_, user) => user);
  }

  addTopic(topic: Topic): void {
    this.#addTopic(topic);
  }

  removeTopic(id: string): void {
    this.#removeTopic(id);
  }

  showTopics(topics: Topic[]): void {
    this.#showTopics(topics);
  }

  setUser(user: User | null): void {
    this.#setUser(user);
  }

  reset(): void {
    this.#reset();
  }

  get topicsStore(): Store<Topic[]> {
    return this.#topicsStore;
  }

  get userStore(): Store<User | null> {
    return this.#userStore;
  }
}

export { TopicsPagePresenter };
