import { waitFor } from '@testing-library/react';
import { SignInProvider } from '@flashcards/core';
import { ILogin as ILoginAuthentication } from '../../service';
import { ISetUser } from '../../output';
import { Login } from './Login';
import { userMock } from '../../mocks';

describe('Login', () => {
  it('should call presenter with correct arguments', async () => {
    const authentication: ILoginAuthentication = {
      loginWithProvider: () => Promise.resolve(userMock),
    };
    const presenter: ISetUser = {
      setUser: jest.fn(),
    };
    const loginUseCase = new Login(authentication, presenter);

    loginUseCase.loginWithProvider(SignInProvider.Google);

    await waitFor(() => expect(presenter.setUser).toBeCalledWith(userMock));
  });
});
