import { act } from '@testing-library/react';
import { TopicsPresenter } from './TopicsPresenterImpl';
import { topicsMock } from './mocks';

const topicsPresenter = new TopicsPresenter();

describe('TopicsPresenterImpl', () => {
  beforeEach(() => {
    topicsPresenter.reset();
  });

  it('should show topics', () => {
    act(() => {
      topicsPresenter.showTopics(topicsMock);
    });

    expect(topicsPresenter.topicsStore.getState()).toStrictEqual(topicsMock);
  });

  it('should add topic', () => {
    expect(topicsPresenter.topicsStore.getState()).toStrictEqual([]);

    act(() => {
      topicsPresenter.addTopic(topicsMock[0]);
    });

    expect(topicsPresenter.topicsStore.getState()).toStrictEqual([topicsMock[0]]);
  });

  it('should remove topic', () => {
    act(() => {
      topicsPresenter.showTopics(topicsMock);
    });

    expect(topicsPresenter.topicsStore.getState()).toStrictEqual(topicsMock);

    act(() => {
      topicsPresenter.removeTopic('1');
    });

    expect(topicsPresenter.topicsStore.getState()).toStrictEqual([topicsMock[1]]);
  });
});
