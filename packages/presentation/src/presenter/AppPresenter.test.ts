import { AppPresenter } from './AppPresenter';
import { userMock } from '../mocks';

describe('AppPresenter', () => {
  it('should set user', () => {
    const appPresenter = new AppPresenter();
    const watcher = jest.fn();
    appPresenter.userStore.watch(watcher);
    appPresenter.setUser(userMock);

    expect(watcher).toHaveBeenLastCalledWith(userMock);
  });

  it('should reset user', () => {
    const appPresenter = new AppPresenter();
    const watcher = jest.fn();
    appPresenter.userStore.watch(watcher);
    appPresenter.setUser(userMock);

    expect(watcher).toHaveBeenLastCalledWith(userMock);

    appPresenter.reset();

    expect(watcher).toHaveBeenLastCalledWith(null);
  });
});
