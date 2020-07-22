import { User, Topic } from '@flashcards/core';

const userMock: User = {
  uid: '1',
  displayName: 'user name',
  email: 'user@email.com',
  photoURL: 'photo-url.jpg',
};

const topicsMock: Topic[] = [
  new Topic({ id: '1', name: 'topic 1' }),
  new Topic({ id: '2', name: 'topic 2' }),
];

export { userMock, topicsMock };
