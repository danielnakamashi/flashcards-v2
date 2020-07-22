import { AddTopic } from './AddTopic';

const mockFn = jest.fn();
jest.mock('@flashcards/application', () => {
  const { InputBoundary, Service, OutputBoundary } = jest.requireActual('@flashcards/application');
  return {
    InputBoundary,
    Service,
    OutputBoundary,
    UseCase: {
      AddTopic: jest.fn(() => ({
        addTopic: mockFn,
      })),
    },
  };
});

describe('AddTopic', () => {
  it('should call addTopic', () => {
    const service = { addTopic: jest.fn() };
    const presenter = { addTopic: jest.fn() };
    const topicController = new AddTopic(service, presenter);

    topicController.addTopic({ name: 'name test' }, '123');

    expect(mockFn).toBeCalledWith({ name: 'name test' }, '123');
  });
});
