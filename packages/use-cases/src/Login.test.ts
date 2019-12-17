import { wait } from '@testing-library/react';
import { Enums } from '@flashcards/entities';
import { IUserAuthentication } from '@flashcards/services';
import { IUserPresenter } from '@flashcards/presenters';
import { Login } from './Login';
import { userMock, userAuthentication, userPresenter } from './mocks';

describe('Login', () => {
  it('should call presenter with correct arguments', async () => {
    const authentication: IUserAuthentication = {
      ...userAuthentication,
      loginWithProvider: () => Promise.resolve(userMock),
    };
    const presenter: IUserPresenter = {
      ...userPresenter,
      setUser: jest.fn(),
    };
    const loginUseCase = new Login(authentication, presenter);

    loginUseCase.loginWithProvider(Enums.SignInProvider.Google);

    await wait(() => expect(presenter.setUser).toBeCalledWith(userMock));
  });
});
