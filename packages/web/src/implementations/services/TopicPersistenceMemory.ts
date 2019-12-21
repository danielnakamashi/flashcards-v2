import { Topic } from '@flashcards/entities';
import { ITopicRepository } from '@flashcards/services';

const TOPICS = [
  new Topic({ id: '1', name: 'Topic 1' }),
  new Topic({ id: '2', name: 'Topic 2' }),
  new Topic({ id: '3', name: 'Topic 3' }),
];
let nextId = 3;

class TopicPersistence implements ITopicRepository {
  getTopics(uid: string): Promise<Topic[]> {
    return Promise.resolve(TOPICS);
  }

  addTopic(topic: { name: string }): Promise<Topic> {
    nextId += 1;
    const newTopic = new Topic({ ...topic, id: String(nextId) });
    TOPICS.push(newTopic);

    return Promise.resolve(newTopic);
  }

  removeTopic(id: string): Promise<void> {
    const index = TOPICS.findIndex(topic => topic.id === id);

    if (index > -1) {
      TOPICS.splice(index, 1);
    }

    return Promise.resolve();
  }
}

export { TopicPersistence };
