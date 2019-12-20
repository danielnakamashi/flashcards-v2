import { userStore, userPresenter } from './UserPresenterImpl';
import { userMock } from './mocks';

describe('UserPresenterImpl', () => {
  beforeEach(() => {
    userPresenter.reset();
  });

  it('should set user correctly', () => {
    expect(userStore.getState()).toBe(null);

    userPresenter.setUser(userMock);

    expect(userStore.getState()).toStrictEqual(userMock);
  });
});
