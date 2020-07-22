import { act } from '@testing-library/react';
import { TopicsPagePresenter } from './TopicsPagePresenter';
import { topicsMock } from '../mocks';

let topicsPresenter: TopicsPagePresenter;

describe('TopicsPresenter', () => {
  beforeEach(() => {
    topicsPresenter = new TopicsPagePresenter();
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
