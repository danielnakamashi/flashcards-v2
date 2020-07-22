import { waitFor } from '@testing-library/react';
import { SignInProvider } from '@flashcards/core';
import { ILoginService } from '../../service';
import { ISetUserOutput } from '../../output';
import { LoginUseCase } from './LoginUseCase';
import { userMock } from '../../mocks';

describe('LoginUseCase', () => {
  it('should call presenter with correct arguments', async () => {
    const authentication: ILoginService = {
      loginWithProvider: () => Promise.resolve(userMock),
    };
    const presenter: ISetUserOutput = {
      setUser: jest.fn(),
    };
    const loginUseCase = new LoginUseCase(authentication, presenter);

    await loginUseCase.loginWithProvider(SignInProvider.Google);

    await waitFor(() => expect(presenter.setUser).toBeCalledWith(userMock));
  });
});
