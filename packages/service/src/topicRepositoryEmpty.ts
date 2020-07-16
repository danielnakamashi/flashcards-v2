import { Topic, Card } from '@flashcards/core';
import { Service } from '@flashcards/application';

const topicRepositoryEmpty: Service.ITopicRepository = {
  addCard: () => Promise.resolve(new Card({ id: '', question: '', answer: '' })),
  addTopic: () => Promise.resolve(new Topic({ id: '', name: '' })),
  getTopicById: () => Promise.resolve(null),
  getTopicsByUser: () => Promise.resolve([]),
  removeTopic: () => Promise.resolve(),
};

export { topicRepositoryEmpty };
