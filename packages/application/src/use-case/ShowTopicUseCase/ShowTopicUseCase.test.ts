import { ShowTopicUseCase } from './ShowTopicUseCase';
import { IGetTopicByIdService } from '../../service';
import { IShowTopicOutput } from '../../output';
import { topicsMock } from '../../mocks';
import { waitFor } from '@testing-library/react';

describe('ShowTopicUseCase', () => {
  it('should call presenter with correct arguments', async () => {
    const repository: IGetTopicByIdService = {
      getTopicById: () => Promise.resolve(topicsMock[0]),
    };
    const presenter: IShowTopicOutput = {
      showTopic: jest.fn(),
    };
    const showTopic = new ShowTopicUseCase(repository, presenter);

    await showTopic.showTopic('uid', 'topicId');

    await waitFor(() => expect(presenter.showTopic).toBeCalledWith(topicsMock[0]));
  });
});
