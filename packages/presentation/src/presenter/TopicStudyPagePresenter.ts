import { createDomain, Store, Event } from 'effector';
import { Card, Topic } from '@flashcards/core';
import { OutputBoundary } from '@flashcards/application';

export type ITopicStudyPagePresenter = OutputBoundary.IShowTopicOutput &
  OutputBoundary.IShowCardsOutput & {
    readonly topicNameStore: Store<string>;
    readonly cardsStore: Store<Card[]>;
    reset: () => void;
  };

class TopicStudyPagePresenter implements ITopicStudyPagePresenter {
  private _reset: Event<void>;
  private _setTopicName: Event<string>;
  private _topicNameStore: Store<string>;
  private _setCards: Event<Card[]>;
  private _cardsStore: Store<Card[]>;

  constructor() {
    const domain = createDomain('topic study page presenter');

    this._reset = domain.event<void>('reset topic study page presenter');

    domain.onCreateStore((store) => store.reset(this._reset));

    this._setTopicName = domain.event<string>('set topic name');
    this._topicNameStore = domain
      .store<string>('')
      .on(this._setTopicName, (_, topicName) => topicName);

    this._setCards = domain.event<Card[]>('set cards');
    this._cardsStore = domain.store<Card[]>([]).on(this._setCards, (_, cards) => cards);
  }

  showCards(cards: Card[]): void {
    this._setCards(cards);
  }

  showTopic(topic: Topic | null): void {
    this._setTopicName(topic?.name ?? '');
    this._setCards(topic?.cards ?? []);
  }

  reset(): void {
    this._reset();
  }

  get topicNameStore(): Store<string> {
    return this._topicNameStore;
  }

  get cardsStore(): Store<Card[]> {
    return this._cardsStore;
  }
}

export { TopicStudyPagePresenter };
