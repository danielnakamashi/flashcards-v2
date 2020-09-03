import { TopicsPagePresenter } from './TopicsPagePresenter';
import { topicsMock, userMock } from '../mocks';

const topicsPresenter = new TopicsPagePresenter();

describe('TopicsPresenter', () => {
  beforeEach(() => {
    topicsPresenter.reset();
  });

  it('should show topics', () => {
    const topicsWatcher = jest.fn();
    const unsubscribeTopicsWatcher = topicsPresenter.topicsStore.watch(topicsWatcher);

    topicsPresenter.showTopics(topicsMock);

    expect(topicsWatcher).toHaveBeenLastCalledWith(topicsMock);

    unsubscribeTopicsWatcher();
  });

  it('should add topic', () => {
    const topicsWatcher = jest.fn();
    const unsubscribeTopicsWatcher = topicsPresenter.topicsStore.watch(topicsWatcher);

    topicsPresenter.addTopic(topicsMock[0]);

    expect(topicsWatcher).toHaveBeenLastCalledWith([topicsMock[0]]);

    unsubscribeTopicsWatcher();
  });

  it('should remove topic', () => {
    const topicsWatcher = jest.fn();
    const unsubscribeTopicsWatcher = topicsPresenter.topicsStore.watch(topicsWatcher);

    topicsPresenter.showTopics(topicsMock);

    expect(topicsWatcher).toHaveBeenLastCalledWith(topicsMock);

    topicsPresenter.removeTopic('1');

    expect(topicsWatcher).toHaveBeenLastCalledWith([topicsMock[1]]);

    unsubscribeTopicsWatcher();
  });

  it('should set user', () => {
    const userWatcher = jest.fn();
    const unsubscribeUserWatcher = topicsPresenter.userStore.watch(userWatcher);

    topicsPresenter.setUser(userMock);

    expect(userWatcher).toHaveBeenLastCalledWith(userMock);

    unsubscribeUserWatcher();
  });

  it('should reset', () => {
    const topicsWatcher = jest.fn();
    const userWatcher = jest.fn();
    const unsubscribeTopicsWatcher = topicsPresenter.topicsStore.watch(topicsWatcher);
    const unsubscribeUserWatcher = topicsPresenter.userStore.watch(userWatcher);

    topicsPresenter.setUser(userMock);
    topicsPresenter.showTopics(topicsMock);

    expect(userWatcher).toHaveBeenLastCalledWith(userMock);
    expect(topicsWatcher).toHaveBeenLastCalledWith(topicsMock);

    topicsPresenter.reset();

    expect(userWatcher).toHaveBeenLastCalledWith(null);
    expect(topicsWatcher).toHaveBeenLastCalledWith([]);

    unsubscribeTopicsWatcher();
    unsubscribeUserWatcher();
  });
});
