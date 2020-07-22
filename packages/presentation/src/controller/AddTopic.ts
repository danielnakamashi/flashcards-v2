import { InputBoundary, OutputBoundary, UseCase, Service } from '@flashcards/application';

class AddTopic implements InputBoundary.IAddTopicInput {
  _useCase: InputBoundary.IAddTopicInput;

  constructor(
    topicRepository: Service.IAddTopicService,
    topicsPresenter: OutputBoundary.IAddTopicOutput,
  ) {
    this._useCase = new UseCase.AddTopicUseCase(topicRepository, topicsPresenter);
  }

  addTopic({ name }: { name: string }, uid: string): Promise<void> {
    return this._useCase.addTopic({ name }, uid);
  }
}

export { AddTopic };
