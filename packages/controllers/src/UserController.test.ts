import { IGetUser, ILogout, ILogin } from '@flashcards/use-cases';
import { Enums } from '@flashcards/entities';
import { UserController } from './UserController';

const getUserUseCase: IGetUser = { get: jest.fn() };
const logoutUseCase: ILogout = { logout: jest.fn() };
const loginUseCase: ILogin = { loginWithProvider: jest.fn() };

describe('UserController', () => {
  it('should call get', () => {
    const userController = new UserController(getUserUseCase, logoutUseCase, loginUseCase);
    userController.getUser();

    expect(getUserUseCase.get).toBeCalled();
  });

  it('should call logout', () => {
    const userController = new UserController(getUserUseCase, logoutUseCase, loginUseCase);
    userController.logout();

    expect(logoutUseCase.logout).toBeCalled();
  });

  it('should call loginWithProvider', () => {
    const userController = new UserController(getUserUseCase, logoutUseCase, loginUseCase);
    userController.loginWithProvider(Enums.SignInProvider.Google);

    expect(loginUseCase.loginWithProvider).toBeCalledWith(Enums.SignInProvider.Google);
  });
});
