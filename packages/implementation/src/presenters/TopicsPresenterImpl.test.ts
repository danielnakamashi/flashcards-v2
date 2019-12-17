import { createEvent } from 'effector';
import { topicsStore, topicsPresenter } from './TopicsPresenterImpl';
import { topicsMock } from './mocks';

const reset = createEvent('reset topics store');
topicsStore.reset(reset);

describe('TopicsPresenterImpl', () => {
  beforeEach(() => {
    reset();
  });

  it('should show topics', () => {
    expect(topicsStore.getState()).toStrictEqual([]);

    topicsPresenter.showTopics(topicsMock);

    expect(topicsStore.getState()).toStrictEqual(topicsMock);
  });

  it('should add topic', () => {
    expect(topicsStore.getState()).toStrictEqual([]);

    topicsPresenter.addTopic(topicsMock[0]);

    expect(topicsStore.getState()).toStrictEqual([topicsMock[0]]);
  });

  it('should remove topic', () => {
    expect(topicsStore.getState()).toStrictEqual([]);

    topicsPresenter.addTopic(topicsMock[0]);
    topicsPresenter.addTopic(topicsMock[1]);

    expect(topicsStore.getState()).toStrictEqual(topicsMock);

    topicsPresenter.removeTopic('1');

    expect(topicsStore.getState()).toStrictEqual([topicsMock[1]]);
  });
});
