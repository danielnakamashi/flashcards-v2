import { act } from '@testing-library/react';
import { TopicsPresenter } from './TopicsPresenter';
import { topicsMock } from '../mocks';

const topicsPresenter = new TopicsPresenter();

describe('TopicsPresenter', () => {
  beforeEach(() => {
    topicsPresenter.reset();
  });

  it('should show topics', () => {
    act(() => {
      topicsPresenter.showTopics(topicsMock);
    });

    expect(topicsPresenter.getTopics()).toStrictEqual(topicsMock);
  });

  it('should add topic', () => {
    expect(topicsPresenter.getTopics()).toStrictEqual([]);

    act(() => {
      topicsPresenter.addTopic(topicsMock[0]);
    });

    expect(topicsPresenter.getTopics()).toStrictEqual([topicsMock[0]]);
  });

  it('should remove topic', () => {
    act(() => {
      topicsPresenter.showTopics(topicsMock);
    });

    expect(topicsPresenter.getTopics()).toStrictEqual(topicsMock);

    act(() => {
      topicsPresenter.removeTopic('1');
    });

    expect(topicsPresenter.getTopics()).toStrictEqual([topicsMock[1]]);
  });
});
