import { GetCurrentUser } from './GetCurrentUser';

const mockFn = jest.fn();
jest.mock('@flashcards/application', () => {
  const { InputBoundary, Service, OutputBoundary } = jest.requireActual('@flashcards/application');
  return {
    InputBoundary,
    Service,
    OutputBoundary,
    UseCase: {
      GetUser: jest.fn(() => ({
        getCurrentUser: mockFn,
      })),
    },
  };
});

describe('GetCurrentUser', () => {
  it('should call getCurrentUser', () => {
    const service = { getUser: jest.fn() };
    const presenter = { setUser: jest.fn() };
    const topicController = new GetCurrentUser(service, presenter);

    topicController.getCurrentUser();

    expect(mockFn).toBeCalled();
  });
});
