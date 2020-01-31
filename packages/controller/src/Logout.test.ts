import { Logout } from './Logout';

const mockFn = jest.fn();
jest.mock('@flashcards/application', () => {
  const { InputBoundary, Service, OutputBoundary } = jest.requireActual('@flashcards/application');
  return {
    InputBoundary,
    Service,
    OutputBoundary,
    UseCase: {
      Logout: jest.fn(() => ({
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
