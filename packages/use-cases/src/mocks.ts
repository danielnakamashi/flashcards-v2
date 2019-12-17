import { Topic, User } from '@flashcards/entities';
import { ITopicPersistence, IUserAuthentication } from '@flashcards/services';
import { ITopicsPresenter, IUserPresenter } from '@flashcards/presenters';

const topicsMock: Topic[] = [
  new Topic({ id: '1', name: 'topic 1' }),
  new Topic({ id: '2', name: 'topic 2' }),
];

const userMock: User = {
  uid: '1',
  displayName: 'user name',
  email: 'user@email.com',
  photoURL: 'photo-url.jpg',
};

const topicPersistence: ITopicPersistence = {
  getTopics: () => Promise.resolve([]),
  addTopic: () => Promise.resolve(topicsMock[0]),
  removeTopic: () => Promise.resolve(),
  hasTopic: () => Promise.resolve(true),
};

const topicsPresenter: ITopicsPresenter = {
  showTopics: () => {},
  addTopic: () => {},
  removeTopic: () => {},
};

const userAuthentication: IUserAuthentication = {
  getUser: () => Promise.resolve(null),
  logout: () => Promise.resolve(),
  loginWithProvider: () => Promise.resolve(null),
};

const userPresenter: IUserPresenter = {
  setUser: () => {},
};

export {
  topicsMock,
  userMock,
  topicPersistence,
  topicsPresenter,
  userAuthentication,
  userPresenter,
};
