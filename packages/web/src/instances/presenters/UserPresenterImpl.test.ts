import { UserPresenter } from './UserPresenterImpl';
import { userMock } from './mocks';

const userPresenter = new UserPresenter();

describe('UserPresenterImpl', () => {
  beforeEach(() => {
    userPresenter.reset();
  });

  it('should set user correctly', () => {
    expect(userPresenter.userStore.getState()).toBe(null);

    userPresenter.setUser(userMock);

    expect(userPresenter.userStore.getState()).toStrictEqual(userMock);
  });
});
