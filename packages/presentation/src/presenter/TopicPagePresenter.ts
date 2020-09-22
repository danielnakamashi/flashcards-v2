import { createDomain, Store, Event } from 'effector';
import { OutputBoundary } from '@flashcards/application';
import { Card, Topic } from '@flashcards/core';

export interface ITopicPagePresenter
  extends OutputBoundary.IShowTopicOutput,
    OutputBoundary.IAddCardOutput,
    OutputBoundary.IRemoveCardOutput,
    OutputBoundary.IRemoveCardOutput {
  readonly topicNameStore: Store<string>;
  readonly cardsStore: Store<Card[]>;
  reset: () => void;
}

class TopicPagePresenter implements ITopicPagePresenter {
  private _topicId = '';
  private _topicNameStore: Store<string>;
  private _cardsStore: Store<Card[]>;
  private _setTopicName: Event<string>;
  private _setCards: Event<Card[]>;
  private _addCard: Event<Card>;
  private _removeCard: Event<string>;
  private _reset: Event<void>;

  constructor() {
    const domain = createDomain('topic page presenter');

    this._reset = domain.event<void>('reset topic page presenter');

    domain.onCreateStore((store) => store.reset(this._reset));

    this._setTopicName = domain.event<string>('set topic name');
    this._topicNameStore = domain
      .store<string>('')
      .on(this._setTopicName, (_, topicName) => topicName);

    this._setCards = domain.event<Card[]>('set cards');
    this._addCard = domain.event<Card>('add new card');
    this._removeCard = domain.event<string>('remove card');
    this._cardsStore = domain
      .store<Card[]>([])
      .on(this._setCards, (_, cards) => [...cards])
      .on(this._addCard, (cards, newCard) => [...cards, newCard])
      .on(this._removeCard, (cards, cardId) => cards.filter((card) => card.id !== cardId));
  }

  showTopic(topic: Topic | null): void {
    this._topicId = topic?.id ?? '';
    this._setTopicName(topic?.name ?? '');
    this._setCards(topic?.cards ?? []);
  }

  addCard(card: Card): Card {
    return this._addCard(card);
  }

  removeCard(cardId: string): void {
    this._removeCard(cardId);
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

export { TopicPagePresenter };
