import { wait } from '@testing-library/react';
import { IShowTopicsRepository, IShowTopicsOutput } from '@flashcards/application';
import { ShowTopics } from './ShowTopics';
import { topicsMock } from '../../mocks';

describe('ShowTopics', () => {
  it('should call presenter with correct arguments', async () => {
    const repository: IShowTopicsRepository = {
      getTopics: () => Promise.resolve(topicsMock),
    };
    const presenter: IShowTopicsOutput = {
      showTopics: jest.fn(),
    };
    const showTopics = new ShowTopics(repository, presenter);

    showTopics.showTopics('uid');

    await wait(() => expect(presenter.showTopics).toBeCalledWith(topicsMock));
  });
});
