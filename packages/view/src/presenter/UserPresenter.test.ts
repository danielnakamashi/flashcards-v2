import { UserPresenter } from './UserPresenter';
import { userMock } from '../mocks';

const userPresenter = new UserPresenter();

describe('UserPresenter', () => {
  beforeEach(() => {
    userPresenter.reset();
  });

  it('should set user correctly', () => {
    expect(userPresenter.getUser()).toBe(null);

    userPresenter.setUser(userMock);

    expect(userPresenter.getUser()).toStrictEqual(userMock);
  });
});
