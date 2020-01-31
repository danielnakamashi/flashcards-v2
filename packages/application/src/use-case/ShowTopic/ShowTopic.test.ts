import { ShowTopic } from './ShowTopic';
import { IGetTopicById } from '../../service';
import { IShowTopic as IShowTopicOutput } from '../../output';
import { topicsMock } from '../../mocks';
import { wait } from '@testing-library/react';

describe('ShowTopic', () => {
  it('should call presenter with correct arguments', async () => {
    const repository: IGetTopicById = {
      getTopicById: () => Promise.resolve(topicsMock[0]),
    };
    const presenter: IShowTopicOutput = {
      showTopic: jest.fn(),
    };
    const showTopic = new ShowTopic(repository, presenter);

    showTopic.showTopic('uid', 'topicId');

    await wait(() => expect(presenter.showTopic).toBeCalledWith(topicsMock[0]));
  });
});
