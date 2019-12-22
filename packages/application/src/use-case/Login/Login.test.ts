import { wait } from '@testing-library/react';
import { SignInProvider } from '@flashcards/core';
import { ILoginAuthentication, ISetUserOutput } from '@flashcards/application';
import { Login } from './Login';
import { userMock } from '../../mocks';

describe('Login', () => {
  it('should call presenter with correct arguments', async () => {
    const authentication: ILoginAuthentication = {
      loginWithProvider: () => Promise.resolve(userMock),
    };
    const presenter: ISetUserOutput = {
      setUser: jest.fn(),
    };
    const loginUseCase = new Login(authentication, presenter);

    loginUseCase.loginWithProvider(SignInProvider.Google);

    await wait(() => expect(presenter.setUser).toBeCalledWith(userMock));
  });
});
