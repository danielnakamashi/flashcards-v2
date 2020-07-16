import { User, Topic, Card } from '@flashcards/core';

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

const cardsMock: Card[] = [
  new Card({ id: '1', question: 'Card 1', answer: 'Definition 1' }),
  new Card({ id: '2', question: 'Card 2', answer: 'Definition 2' }),
];

export { userMock, topicsMock, cardsMock };
