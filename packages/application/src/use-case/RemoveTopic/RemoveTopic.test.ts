import { wait } from '@testing-library/react';
import { IRemoveTopicRepository, IRemoveTopicOutput } from '@flashcards/application';
import { RemoveTopic } from './RemoveTopic';

describe('RemoveTopic', () => {
  it('should call presenter with correct arguments', async () => {
    const repository: IRemoveTopicRepository = {
      removeTopic: () => Promise.resolve(),
    };
    const presenter: IRemoveTopicOutput = {
      removeTopic: jest.fn(),
    };
    const removeTopicUseCase = new RemoveTopic(repository, presenter);

    removeTopicUseCase.removeTopic({ uid: 'uid', topicId: 'topicId' });

    await wait(() => expect(presenter.removeTopic).toBeCalledWith('topicId'));
  });
});
