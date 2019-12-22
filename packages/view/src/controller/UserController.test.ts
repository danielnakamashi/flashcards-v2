import { IGetUserInput, ILogoutInput, ILoginInput } from '@flashcards/application';
import { SignInProvider } from '@flashcards/core';
import { UserController } from './UserController';

const getUserUseCase: IGetUserInput = { getUser: jest.fn() };
const logoutUseCase: ILogoutInput = { logout: jest.fn() };
const loginUseCase: ILoginInput = { loginWithProvider: jest.fn() };

describe('UserController', () => {
  it('should call get', () => {
    const userController = new UserController(getUserUseCase, logoutUseCase, loginUseCase);
    userController.getUser();

    expect(getUserUseCase.getUser).toBeCalled();
  });

  it('should call logout', () => {
    const userController = new UserController(getUserUseCase, logoutUseCase, loginUseCase);
    userController.logout();

    expect(logoutUseCase.logout).toBeCalled();
  });

  it('should call loginWithProvider', () => {
    const userController = new UserController(getUserUseCase, logoutUseCase, loginUseCase);
    userController.loginWithProvider(SignInProvider.Google);

    expect(loginUseCase.loginWithProvider).toBeCalledWith(SignInProvider.Google);
  });
});
