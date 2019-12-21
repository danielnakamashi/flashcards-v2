import { wait } from '@testing-library/react';
import { ITopicRepository } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';
import { RemoveTopic } from './RemoveTopic';
import { topicPersistence, topicsPresenter } from './mocks';

describe('RemoveTopic', () => {
  it('should call presenter with correct arguments', async () => {
    const persistence: ITopicRepository = {
      ...topicPersistence,
      removeTopic: () => Promise.resolve(),
    };
    const presenter: ITopicsPresenter = {
      ...topicsPresenter,
      removeTopic: jest.fn(),
    };
    const removeTopicUseCase = new RemoveTopic(persistence, presenter);

    removeTopicUseCase.removeTopic('id');

    await wait(() => expect(presenter.removeTopic).toBeCalledWith('id'));
  });
});
