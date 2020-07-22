import { SignInProvider } from '@flashcards/core';
import { Login } from './Login';

const mockFn = jest.fn();
jest.mock('@flashcards/application', () => {
  const { InputBoundary, Service, OutputBoundary } = jest.requireActual('@flashcards/application');
  return {
    InputBoundary,
    Service,
    OutputBoundary,
    UseCase: {
      LoginUseCase: jest.fn(() => ({
        loginWithProvider: mockFn,
      })),
    },
  };
});

describe('Login', () => {
  it('should call login', () => {
    const service = { loginWithProvider: jest.fn() };
    const presenter = { setUser: jest.fn() };
    const loginController = new Login(service, presenter);

    loginController.loginWithProvider(SignInProvider.Google);

    expect(mockFn).toBeCalledWith(SignInProvider.Google);
  });
});
