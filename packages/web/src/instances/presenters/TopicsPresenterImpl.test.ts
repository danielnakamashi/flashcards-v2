import { renderHook, act } from '@testing-library/react-hooks';
import { topicsPresenter } from './TopicsPresenterImpl';
import { topicsMock } from './mocks';

describe('TopicsPresenterImpl', () => {
  beforeEach(() => {
    topicsPresenter.reset();
  });

  it('should show topics', () => {
    const { result } = renderHook(() => topicsPresenter.useTopics());

    act(() => {
      topicsPresenter.showTopics(topicsMock);
    });

    expect(result.current).toStrictEqual(topicsMock);
  });

  it('should add topic', () => {
    const { result } = renderHook(() => topicsPresenter.useTopics());

    expect(result.current).toStrictEqual([]);

    act(() => {
      topicsPresenter.addTopic(topicsMock[0]);
    });

    expect(result.current).toStrictEqual([topicsMock[0]]);
  });

  it('should remove topic', () => {
    const { result } = renderHook(() => topicsPresenter.useTopics());

    act(() => {
      topicsPresenter.showTopics(topicsMock);
    });

    expect(result.current).toStrictEqual(topicsMock);

    act(() => {
      topicsPresenter.removeTopic('1');
    });

    expect(result.current).toStrictEqual([topicsMock[1]]);
    // expect(topicsStore.getState()).toStrictEqual([]);

    // topicsPresenter.addTopic(topicsMock[0]);
    // topicsPresenter.addTopic(topicsMock[1]);

    // expect(topicsStore.getState()).toStrictEqual(topicsMock);

    // topicsPresenter.removeTopic('1');

    // expect(topicsStore.getState()).toStrictEqual([topicsMock[1]]);
  });
});
