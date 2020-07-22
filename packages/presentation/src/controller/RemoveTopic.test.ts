import { RemoveTopic } from './RemoveTopic';

const mockFn = jest.fn();
jest.mock('@flashcards/application', () => {
  const { InputBoundary, Service, OutputBoundary } = jest.requireActual('@flashcards/application');
  return {
    InputBoundary,
    Service,
    OutputBoundary,
    UseCase: {
      RemoveTopic: jest.fn(() => ({
        removeTopic: mockFn,
      })),
    },
  };
});

describe('RemoveTopic', () => {
  it('should call removeTopic', () => {
    const repository = { removeTopic: jest.fn() };
    const presenter = { removeTopic: jest.fn() };
    const topicController = new RemoveTopic(repository, presenter);

    topicController.removeTopic('uid', 'topicId');

    expect(mockFn).toBeCalledWith('uid', 'topicId');
  });
});
