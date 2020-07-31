import {
  InputBoundary as InputBoundaryType,
  Service as ServiceType,
  OutputBoundary as OutputBoundaryType,
} from '@flashcards/application';
import { Logout } from './Logout';

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
      LogoutUseCase: jest.fn(() => ({
        logout: mockFn,
      })),
    },
  };
});

describe('Logout', () => {
  it('should call logout', () => {
    const service = { logout: jest.fn() };
    const presenter = { setUser: jest.fn() };
    const topicController = new Logout(service, presenter);

    topicController.logout();

    expect(mockFn).toBeCalled();
  });
});
