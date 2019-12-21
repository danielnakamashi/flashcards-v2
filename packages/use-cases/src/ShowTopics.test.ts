import { wait } from '@testing-library/react';
import { ITopicRepository } from '@flashcards/services';
import { ITopicsPresenter } from '@flashcards/presenters';
import { ShowTopics } from './ShowTopics';
import { topicsMock, topicPersistence, topicsPresenter } from './mocks';

describe('ShowTopics', () => {
  it('should call presenter with correct arguments', async () => {
    const persistence: ITopicRepository = {
      ...topicPersistence,
      getTopics: () => Promise.resolve(topicsMock),
    };
    const presenter: ITopicsPresenter = {
      ...topicsPresenter,
      showTopics: jest.fn(),
    };
    const showTopics = new ShowTopics(persistence, presenter);

    showTopics.showTopics('uid');

    await wait(() => expect(presenter.showTopics).toBeCalledWith(topicsMock));
  });
});
