import { LoginPresenter } from './LoginPresenter';
import { userMock } from '../mocks';

describe('LoginPresenter', () => {
  it('should set user', () => {
    const loginPresenter = new LoginPresenter();
    const watcher = jest.fn();
    loginPresenter.userStore.watch(watcher);

    loginPresenter.setUser(userMock);

    expect(watcher).toHaveBeenLastCalledWith(userMock);
  });

  it('should reset user', () => {
    const loginPresenter = new LoginPresenter();
    const watcher = jest.fn();
    loginPresenter.userStore.watch(watcher);

    loginPresenter.setUser(userMock);

    expect(watcher).toHaveBeenLastCalledWith(userMock);

    loginPresenter.reset();

    expect(watcher).toHaveBeenLastCalledWith(null);
  });
});
