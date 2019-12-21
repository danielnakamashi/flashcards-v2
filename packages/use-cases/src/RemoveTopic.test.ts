import { wait } from '@testing-library/react';
import { ITopicRepository } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';
import { RemoveTopic } from './RemoveTopic';
import { topicRepository, topicsPresenter } from './mocks';

describe('RemoveTopic', () => {
  it('should call presenter with correct arguments', async () => {
    const repository: ITopicRepository = {
      ...topicRepository,
      removeTopic: () => Promise.resolve(),
    };
    const presenter: ITopicsPresenter = {
      ...topicsPresenter,
      removeTopic: jest.fn(),
    };
    const removeTopicUseCase = new RemoveTopic(repository, presenter);

    removeTopicUseCase.removeTopic({ uid: 'uid', topicId: 'topicId' });

    await wait(() => expect(presenter.removeTopic).toBeCalledWith('topicId'));
  });
});
