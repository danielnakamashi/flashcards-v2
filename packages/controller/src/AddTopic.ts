import { InputBoundary, OutputBoundary, UseCase, Service } from '@flashcards/application';

class AddTopic implements InputBoundary.IAddTopic {
  _useCase: InputBoundary.IAddTopic;

  constructor(topicRepository: Service.IAddTopic, topicsPresenter: OutputBoundary.IAddTopic) {
    this._useCase = new UseCase.AddTopic(topicRepository, topicsPresenter);
  }

  addTopic({ name }: { name: string }, uid: string): Promise<void> {
    return this._useCase.addTopic({ name }, uid);
  }
}

export { AddTopic };
