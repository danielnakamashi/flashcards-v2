import { waitFor } from '@testing-library/react';
import { IGetTopicsByUserService } from '../../service';
import { IShowTopicsOutput } from '../../output';
import { ShowTopicsUseCase } from './ShowTopicsUseCase';
import { topicsMock } from '../../mocks';

describe('ShowTopicsUseCase', () => {
  it('should call presenter with correct arguments', async () => {
    const repository: IGetTopicsByUserService = {
      getTopicsByUser: () => Promise.resolve(topicsMock),
    };
    const presenter: IShowTopicsOutput = {
      showTopics: jest.fn(),
    };
    const showTopics = new ShowTopicsUseCase(repository, presenter);

    showTopics.showTopicsByUser('uid');

    await waitFor(() => expect(presenter.showTopics).toBeCalledWith(topicsMock));
  });
});
