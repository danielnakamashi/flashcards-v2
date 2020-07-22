import { waitFor } from '@testing-library/react';
import { IRemoveTopicService } from '../../service';
import { IRemoveTopicOutput } from '../../output';
import { RemoveTopicUseCase } from './RemoveTopicUseCase';

describe('RemoveTopic', () => {
  it('should call presenter with correct arguments', async () => {
    const repository: IRemoveTopicService = {
      removeTopic: () => Promise.resolve(),
    };
    const presenter: IRemoveTopicOutput = {
      removeTopic: jest.fn(),
    };
    const removeTopicUseCase = new RemoveTopicUseCase(repository, presenter);

    removeTopicUseCase.removeTopic('uid', 'topicId');

    await waitFor(() => expect(presenter.removeTopic).toBeCalledWith('topicId'));
  });
});
