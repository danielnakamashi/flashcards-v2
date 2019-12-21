import { wait } from '@testing-library/react';
import { ITopicRepository } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';
import { ShowTopics } from './ShowTopics';
import { topicsMock, topicRepository, topicsPresenter } from './mocks';

describe('ShowTopics', () => {
  it('should call presenter with correct arguments', async () => {
    const repository: ITopicRepository = {
      ...topicRepository,
      getTopics: () => Promise.resolve(topicsMock),
    };
    const presenter: ITopicsPresenter = {
      ...topicsPresenter,
      showTopics: jest.fn(),
    };
    const showTopics = new ShowTopics(repository, presenter);

    showTopics.showTopics('uid');

    await wait(() => expect(presenter.showTopics).toBeCalledWith(topicsMock));
  });
});
