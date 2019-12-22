import { wait } from '@testing-library/react';
import { ILogoutAuthentication, ISetUserOutput } from '@flashcards/application';
import { Logout } from './Logout';

describe('Logout', () => {
  it('should call presenter with correct arguments', async () => {
    const authentication: ILogoutAuthentication = {
      logout: () => Promise.resolve(),
    };
    const presenter: ISetUserOutput = {
      setUser: jest.fn(),
    };
    const logoutUseCase = new Logout(authentication, presenter);

    logoutUseCase.logout();

    await wait(() => expect(presenter.setUser).toBeCalledWith(null));
  });
});
