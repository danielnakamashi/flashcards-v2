import { act } from '@testing-library/react';
import { TopicPagePresenter } from './TopicPagePresenter';
import { topicsMock, cardsMock } from '../mocks';
import { createEvent } from 'effector';

const topicPagePresenter = new TopicPagePresenter();
const reset = createEvent<void>('reset topic page presenter');
topicPagePresenter.topicNameStore.reset(reset);
topicPagePresenter.cardsStore.reset(reset);

describe('TopicPagePresenter', () => {
  beforeEach(() => {
    reset();
  });

  it('should show topic', () => {
    act(() => {
      topicPagePresenter.showTopic(topicsMock[0]);
    });

    expect(topicPagePresenter.topicNameStore.getState()).toStrictEqual(topicsMock[0].name);
  });

  it('should add card', () => {
    act(() => {
      topicPagePresenter.addCard(cardsMock[0]);
    });

    expect(topicPagePresenter.cardsStore.getState()).toStrictEqual([cardsMock[0]]);
  });

  it('should remove card', () => {
    topicPagePresenter.addCard(cardsMock[0]);
    topicPagePresenter.addCard(cardsMock[1]);

    act(() => {
      topicPagePresenter.removeCard('1');
    });

    expect(topicPagePresenter.cardsStore.getState()).toStrictEqual([cardsMock[1]]);
  });
});
