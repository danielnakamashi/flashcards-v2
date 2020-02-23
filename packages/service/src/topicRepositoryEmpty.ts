import { Topic } from '@flashcards/core';
import { Service } from '@flashcards/application';

const topicRepositoryEmpty: Service.ITopicRepository = {
  addTopic: () => Promise.resolve(new Topic({ id: '', name: '' })),
  getTopicById: () => Promise.resolve(null),
  getTopicsByUser: () => Promise.resolve([]),
  removeTopic: () => Promise.resolve(),
};

export { topicRepositoryEmpty };
