import { wait } from '@testing-library/react';
import { IUserAuthentication } from '@flashcards/services';
import { IUserPresenter } from '@flashcards/presenters';
import { Logout } from './Logout';
import { userAuthentication, userPresenter } from './mocks';

describe('Logout', () => {
  it('should call presenter with correct arguments', async () => {
    const authentication: IUserAuthentication = {
      ...userAuthentication,
      logout: () => Promise.resolve(),
    };
    const presenter: IUserPresenter = {
      ...userPresenter,
      setUser: jest.fn(),
    };
    const logoutUseCase = new Logout(authentication, presenter);

    logoutUseCase.logout();

    await wait(() => expect(presenter.setUser).toBeCalledWith(null));
  });
});
