import { waitFor } from '@testing-library/react';
import { ILogoutService } from '../../service';
import { ISetUserOutput } from '../../output';
import { LogoutUseCase } from './LogoutUseCase';

describe('LogoutUseCase', () => {
  it('should call presenter with correct arguments', async () => {
    const authentication: ILogoutService = {
      logout: () => Promise.resolve(),
    };
    const presenter: ISetUserOutput = {
      setUser: jest.fn(),
    };
    const logoutUseCase = new LogoutUseCase(authentication, presenter);

    await logoutUseCase.logout();

    await waitFor(() => expect(presenter.setUser).toBeCalledWith(null));
  });
});
