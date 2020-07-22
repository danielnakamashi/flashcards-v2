import { ShowTopicsByUser } from './ShowTopicsByUser';
import { IGetTopicsByUserService } from '@flashcards/application/src/service';
import { OutputBoundary } from '@flashcards/application';

const mockFn = jest.fn();
jest.mock('@flashcards/application', () => {
  const { InputBoundary, Service, OutputBoundary } = jest.requireActual('@flashcards/application');
  return {
    InputBoundary,
    Service,
    OutputBoundary,
    UseCase: {
      ShowTopicsUseCase: jest.fn(() => ({
        showTopicsByUser: mockFn,
      })),
    },
  };
});

describe('ShowTopicsByUser', () => {
  it('should call showTopicsByUser', () => {
    const useCase: IGetTopicsByUserService = { getTopicsByUser: jest.fn() };
    const presenter: OutputBoundary.IShowTopicsOutput = { showTopics: jest.fn() };
    const topicController = new ShowTopicsByUser(useCase, presenter);

    topicController.showTopicsByUser('uid');

    expect(mockFn).toBeCalledWith('uid');
  });
});
