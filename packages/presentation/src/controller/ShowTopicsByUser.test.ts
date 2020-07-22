import { ShowTopicsByUser } from './ShowTopicsByUser';
import { IGetTopicsByUser } from '@flashcards/application/src/service';
import { OutputBoundary } from '@flashcards/application';

const mockFn = jest.fn();
jest.mock('@flashcards/application', () => {
  const { InputBoundary, Service, OutputBoundary } = jest.requireActual('@flashcards/application');
  return {
    InputBoundary,
    Service,
    OutputBoundary,
    UseCase: {
      ShowTopics: jest.fn(() => ({
        showTopicsByUser: mockFn,
      })),
    },
  };
});

describe('ShowTopicsByUser', () => {
  it('should call showTopicsByUser', () => {
    const useCase: IGetTopicsByUser = { getTopicsByUser: jest.fn() };
    const presenter: OutputBoundary.IShowTopics = { showTopics: jest.fn() };
    const topicController = new ShowTopicsByUser(useCase, presenter);

    topicController.showTopicsByUser('uid');

    expect(mockFn).toBeCalledWith('uid');
  });
});
