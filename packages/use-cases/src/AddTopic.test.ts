import { wait } from '@testing-library/react';
import { Topic } from '@flashcards/entities';
import { AddTopic } from './AddTopic';
import { topicPersistence, topicsPresenter } from './mocks';

describe('AddTopic', () => {
  it('should call presenter with correct arguments', async () => {
    const mockPersistence = {
      ...topicPersistence,
      addTopic: () => Promise.resolve(new Topic({ id: '1', name: 'topic name' })),
    };
    const mockPresenter = {
      ...topicsPresenter,
      addTopic: jest.fn(),
    };
    const addTopicUseCase = new AddTopic(mockPersistence, mockPresenter);

    addTopicUseCase.addTopic({ name: 'topic name' }, '123');

    await wait(() =>
      expect(mockPresenter.addTopic).toBeCalledWith(
        { id: '1', name: 'topic name', cards: [] },
        '123',
      ),
    );
  });
});
