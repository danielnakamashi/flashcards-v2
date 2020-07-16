import { waitFor } from '@testing-library/react';
import { IGetTopicsByUser } from '../../service';
import { IShowTopics } from '../../output';
import { ShowTopics } from './ShowTopics';
import { topicsMock } from '../../mocks';

describe('ShowTopics', () => {
  it('should call presenter with correct arguments', async () => {
    const repository: IGetTopicsByUser = {
      getTopicsByUser: () => Promise.resolve(topicsMock),
    };
    const presenter: IShowTopics = {
      showTopics: jest.fn(),
    };
    const showTopics = new ShowTopics(repository, presenter);

    showTopics.showTopicsByUser('uid');

    await waitFor(() => expect(presenter.showTopics).toBeCalledWith(topicsMock));
  });
});
