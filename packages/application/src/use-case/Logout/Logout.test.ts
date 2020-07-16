import { waitFor } from '@testing-library/react';
import { ILogout as ILogoutAuthentication } from '../../service';
import { ISetUser } from '../../output';
import { Logout } from './Logout';

describe('Logout', () => {
  it('should call presenter with correct arguments', async () => {
    const authentication: ILogoutAuthentication = {
      logout: () => Promise.resolve(),
    };
    const presenter: ISetUser = {
      setUser: jest.fn(),
    };
    const logoutUseCase = new Logout(authentication, presenter);

    await logoutUseCase.logout();

    await waitFor(() => expect(presenter.setUser).toBeCalledWith(null));
  });
});
