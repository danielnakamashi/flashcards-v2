import {
  InputBoundary as InputBoundaryType,
  Service as ServiceType,
  OutputBoundary as OutputBoundaryType,
} from '@flashcards/application';
import { IGetTopicsByUserService } from '@flashcards/application/src/service';
import { OutputBoundary } from '@flashcards/application';
import { ShowTopicsByUser } from './ShowTopicsByUser';

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
