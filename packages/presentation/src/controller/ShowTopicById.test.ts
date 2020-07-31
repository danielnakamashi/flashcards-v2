import {
  InputBoundary as InputBoundaryType,
  Service as ServiceType,
  OutputBoundary as OutputBoundaryType,
} from '@flashcards/application';
import { ShowTopicById } from './ShowTopicById';

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
      ShowTopicUseCase: jest.fn(() => ({
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
