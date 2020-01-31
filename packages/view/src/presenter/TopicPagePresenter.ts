import { createStore, createEvent, Store } from 'effector';
import { OutputBoundary } from '@flashcards/application';
import { Card, Topic } from '@flashcards/core';

export interface ITopicPagePresenter
  extends OutputBoundary.IShowTopic,
    OutputBoundary.IAddCard,
    OutputBoundary.IRemoveCard {
  readonly topicNameStore: Store<string>;
  readonly cardsStore: Store<Card[]>;
}

class TopicPagePresenter implements ITopicPagePresenter {
  _topicId = '';
  _topicNameStore = createStore<string>('');
  _cardsStore = createStore<Card[]>([]);
  _setTopicName = createEvent<string>('set topic name');
  _setCards = createEvent<Card[]>('set cards');
  _addCard = createEvent<Card>('add new card');
  _removeCard = createEvent<string>('remove card');
  _reset = createEvent<void>('reset topic name and cards');

  constructor() {
    this._topicNameStore.on(this._setTopicName, (_, topicName) => topicName);
    this._cardsStore
      .on(this._setCards, (_, cards) => cards)
      .on(this._addCard, (cards, newCard) => [...cards, newCard])
      .on(this._removeCard, (cards, cardId) => cards.filter(card => card.id !== cardId));
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

  get topicNameStore(): Store<string> {
    return this._topicNameStore;
  }

  get cardsStore(): Store<Card[]> {
    return this._cardsStore;
  }
}

export { TopicPagePresenter };
