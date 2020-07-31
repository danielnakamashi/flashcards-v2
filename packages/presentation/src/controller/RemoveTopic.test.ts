import {
  InputBoundary as InputBoundaryType,
  Service as ServiceType,
  OutputBoundary as OutputBoundaryType,
} from '@flashcards/application';
import { RemoveTopic } from './RemoveTopic';

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
      RemoveTopicUseCase: jest.fn(() => ({
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
