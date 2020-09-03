import { TopicPagePresenter } from './TopicPagePresenter';
import { topicsMock, cardsMock } from '../mocks';

const topicPagePresenter = new TopicPagePresenter();

describe('TopicPagePresenter', () => {
  beforeEach(() => {
    topicPagePresenter.reset();
  });

  it('should show topic', () => {
    const topicNameWatcher = jest.fn();
    const cardsWatcher = jest.fn();
    const unsubscribeTopicNameWatcher = topicPagePresenter.topicNameStore.watch(topicNameWatcher);
    const unsubscribeCardsWatcher = topicPagePresenter.cardsStore.watch(cardsWatcher);
    const topicMock = topicsMock[0];

    topicPagePresenter.showTopic(topicMock);

    expect(topicNameWatcher).toHaveBeenLastCalledWith(topicMock.name);
    expect(cardsWatcher).toHaveBeenLastCalledWith(topicMock.cards);

    unsubscribeTopicNameWatcher();
    unsubscribeCardsWatcher();
  });

  it('should add card', () => {
    const cardsWatcher = jest.fn();
    const unsubscribeCardsWatcher = topicPagePresenter.cardsStore.watch(cardsWatcher);
    const cardMock = cardsMock[0];

    topicPagePresenter.addCard(cardMock);

    expect(cardsWatcher).toHaveBeenLastCalledWith(expect.arrayContaining([cardMock]));

    unsubscribeCardsWatcher();
  });

  it('should remove card', () => {
    const cardsWatcher = jest.fn();
    const unsubscribeCardsWatcher = topicPagePresenter.cardsStore.watch(cardsWatcher);

    topicPagePresenter.addCard(cardsMock[0]);
    topicPagePresenter.addCard(cardsMock[1]);

    expect(cardsWatcher).toHaveBeenLastCalledWith(
      expect.arrayContaining([cardsMock[0], cardsMock[1]]),
    );

    topicPagePresenter.removeCard('1');

    expect(cardsWatcher).toHaveBeenLastCalledWith(expect.arrayContaining([cardsMock[1]]));

    unsubscribeCardsWatcher();
  });

  it('should reset cards', () => {
    const topicNameWatcher = jest.fn();
    const cardsWatcher = jest.fn();
    const unsubscribeTopicNameWatcher = topicPagePresenter.topicNameStore.watch(topicNameWatcher);
    const unsubscribeCardsWatcher = topicPagePresenter.cardsStore.watch(cardsWatcher);
    const topicMock = topicsMock[0];

    topicPagePresenter.showTopic(topicMock);

    expect(topicNameWatcher).toHaveBeenLastCalledWith(topicMock.name);
    expect(cardsWatcher).toHaveBeenLastCalledWith(topicMock.cards);

    topicPagePresenter.reset();

    expect(topicNameWatcher).toHaveBeenLastCalledWith('');
    expect(cardsWatcher).toHaveBeenLastCalledWith([]);

    unsubscribeTopicNameWatcher();
    unsubscribeCardsWatcher();
  });
});
