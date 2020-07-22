import { waitFor } from '@testing-library/react';
import { Topic } from '@flashcards/core';
import { IAddTopicService } from '../../service';
import { IAddTopicOutput } from '../../output';
import { AddTopicUseCase } from './AddTopicUseCase';

describe('AddTopicUseCase', () => {
  it('should call presenter with correct arguments', async () => {
    const mockRepository: IAddTopicService = {
      addTopic: () => Promise.resolve(new Topic({ id: '1', name: 'topic name' })),
    };
    const mockPresenter: IAddTopicOutput = {
      addTopic: jest.fn(),
    };
    const addTopicUseCase = new AddTopicUseCase(mockRepository, mockPresenter);

    await addTopicUseCase.addTopic({ name: 'topic name' }, '123');

    await waitFor(() =>
      expect(mockPresenter.addTopic).toBeCalledWith({ id: '1', name: 'topic name', cards: [] }),
    );
  });
});
