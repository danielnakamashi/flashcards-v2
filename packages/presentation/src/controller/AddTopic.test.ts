import {
  InputBoundary as InputBoundaryType,
  Service as ServiceType,
  OutputBoundary as OutputBoundaryType,
} from '@flashcards/application';
import { AddTopic } from './AddTopic';

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
      AddTopicUseCase: jest.fn(() => ({
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
