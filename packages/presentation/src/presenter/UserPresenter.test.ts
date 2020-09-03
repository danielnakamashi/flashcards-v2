import { UserPresenter } from './UserPresenter';
import { userMock } from '../mocks';

const userPresenter = new UserPresenter();

describe('UserPresenter', () => {
  beforeEach(() => {
    userPresenter.reset();
  });

  it('should set user', () => {
    const userWatcher = jest.fn();
    const unsubscribeUserWatcher = userPresenter.userStore.watch(userWatcher);

    userPresenter.setUser(userMock);

    expect(userWatcher).toHaveBeenCalledWith(userMock);

    unsubscribeUserWatcher();
  });

  it('should reset user', () => {
    const userWatcher = jest.fn();
    const unsubscribeUserWatcher = userPresenter.userStore.watch(userWatcher);

    userPresenter.setUser(userMock);

    expect(userWatcher).toHaveBeenCalledWith(userMock);

    userPresenter.reset();

    expect(userWatcher).toHaveBeenCalledWith(null);

    unsubscribeUserWatcher();
  });
});
