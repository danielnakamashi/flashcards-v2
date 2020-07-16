import { waitFor } from '@testing-library/react';
import { Topic } from '@flashcards/core';
import { IAddTopic as IAddTopicRepository } from '../../service';
import { IAddTopic as IAddTopicOutput } from '../../output';
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

    await waitFor(() =>
      expect(mockPresenter.addTopic).toBeCalledWith({ id: '1', name: 'topic name', cards: [] }),
    );
  });
});
