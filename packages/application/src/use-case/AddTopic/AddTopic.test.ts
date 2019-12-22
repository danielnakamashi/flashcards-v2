import { wait } from '@testing-library/react';
import { Topic } from '@flashcards/core';
import { IAddTopicRepository, IAddTopicOutput } from '@flashcards/application';
import { AddTopic } from './AddTopic';

describe('AddTopic', () => {
  it('should call presenter with correct arguments', async () => {
    const mockRepository: IAddTopicRepository = {
      addTopic: () => Promise.resolve(new Topic({ id: '1', name: 'topic name' })),
    };
    const mockPresenter: IAddTopicOutput = {
      addTopic: jest.fn(),
    };
    const addTopicUseCase = new AddTopic(mockRepository, mockPresenter);

    addTopicUseCase.addTopic({ name: 'topic name' }, '123');

    await wait(() =>
      expect(mockPresenter.addTopic).toBeCalledWith({ id: '1', name: 'topic name', cards: [] }),
    );
  });
});
