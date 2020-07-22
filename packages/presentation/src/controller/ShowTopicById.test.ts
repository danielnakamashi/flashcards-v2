import { ShowTopicById } from './ShowTopicById';

const mockFn = jest.fn();
jest.mock('@flashcards/application', () => {
  const { InputBoundary, Service, OutputBoundary } = jest.requireActual('@flashcards/application');
  return {
    InputBoundary,
    Service,
    OutputBoundary,
    UseCase: {
      ShowTopic: jest.fn(() => ({
        showTopic: mockFn,
      })),
    },
  };
});

describe('ShowTopicById', () => {
  it('should call showTopic', () => {
    const repository = { getTopicById: jest.fn() };
    const presenter = { showTopic: jest.fn() };
    const topicController = new ShowTopicById(repository, presenter);

    topicController.showTopic('uid', 'topicId');

    expect(mockFn).toBeCalledWith('uid', 'topicId');
  });
});
