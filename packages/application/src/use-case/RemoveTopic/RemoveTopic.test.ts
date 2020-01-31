import { wait } from '@testing-library/react';
import { IRemoveTopic as IRemoveTopicRepository } from '../../service';
import { IRemoveTopic as IRemoveTopicOutput } from '../../output';
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

    removeTopicUseCase.removeTopic('uid', 'topicId');

    await wait(() => expect(presenter.removeTopic).toBeCalledWith('topicId'));
  });
});
