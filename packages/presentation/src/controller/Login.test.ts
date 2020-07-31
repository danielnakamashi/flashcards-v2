import { SignInProvider } from '@flashcards/core';
import {
  InputBoundary as InputBoundaryType,
  Service as ServiceType,
  OutputBoundary as OutputBoundaryType,
} from '@flashcards/application';
import { Login } from './Login';

type ApplicationType = {
  InputBoundary: typeof InputBoundaryType;
  Service: typeof ServiceType;
  OutputBoundary: typeof OutputBoundaryType;
};

const mockFn = jest.fn();
jest.mock('@flashcards/application', () => {
  const { InputBoundary, Service, OutputBoundary } = jest.requireActual<ApplicationType>(
    '@flashcards/application',
  );
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
