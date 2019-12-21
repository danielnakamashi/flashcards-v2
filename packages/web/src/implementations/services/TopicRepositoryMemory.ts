import { Topic } from '@flashcards/entities';
import { ITopicRepository } from '@flashcards/services';

const USERS: { [key: string]: { TOPICS: Topic[] } } = {
  '1': {
    TOPICS: [
      new Topic({ id: '1', name: 'Topic 1' }),
      new Topic({ id: '2', name: 'Topic 2' }),
      new Topic({ id: '3', name: 'Topic 3' }),
    ],
  },
};
let nextId = 3;

class TopicRepository implements ITopicRepository {
  getTopics(uid: string): Promise<Topic[]> {
    return Promise.resolve(USERS[uid]?.TOPICS ?? []);
  }

  addTopic({ name }: { name: string }, uid: string): Promise<Topic> {
    nextId += 1;
    const newTopic = new Topic({ name, id: String(nextId) });
    USERS[uid].TOPICS.push(newTopic);

    return Promise.resolve(newTopic);
  }

  removeTopic({ uid, topicId }: { uid: string; topicId: string }): Promise<void> {
    USERS[uid].TOPICS = USERS[uid].TOPICS.filter(topic => topic.id !== topicId);

    return Promise.resolve();
  }
}

export { TopicRepository };
