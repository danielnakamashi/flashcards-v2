import { createDomain, Store, Event } from 'effector';
import { OutputBoundary } from '@flashcards/application';
import { Card, Topic } from '@flashcards/core';

export interface ITopicPagePresenter
  extends OutputBoundary.IShowTopic,
    OutputBoundary.IAddCard,
    OutputBoundary.IRemoveCard {
  readonly topicNameStore: Store<string>;
  readonly cardsStore: Store<Card[]>;
  reset: () => void;
}

class TopicPagePresenter implements ITopicPagePresenter {
  _topicId = '';
  _topicNameStore: Store<string>;
  _cardsStore: Store<Card[]>;
  _setTopicName: Event<string>;
  _setCards: Event<Card[]>;
  _addCard: Event<Card>;
  _removeCard: Event<string>;
  _reset: Event<void>;

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
      .on(this._setCards, (_, cards) => cards)
      .on(this._addCard, (cards, newCard) => [...cards, newCard])
      .on(this._removeCard, (cards, cardId) => cards.filter((card) => card.id !== cardId));
  }

  showTopic(topic: Topic) {
    this._topicId = topic.id;
    this._setTopicName(topic.name);
    this._setCards(topic.cards);
  }

  addCard(card: Card) {
    return this._addCard(card);
  }

  removeCard(cardId: string) {
    return this._removeCard(cardId);
  }

  reset() {
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
