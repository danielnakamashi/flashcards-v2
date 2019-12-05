import { Topic } from '../entities/Topic';
import { TopicPersistence } from './TopicPersistence';

const TOPICS = [
  new Topic({ id: '1', name: 'Topic 1' }),
  new Topic({ id: '2', name: 'Topic 2' }),
  new Topic({ id: '3', name: 'Topic 3' }),
];
let nextId = 3;

class PersistenceImpl implements TopicPersistence {
  showTopics(uid: string): Promise<Topic[]> {
    return Promise.resolve(TOPICS);
  }

  addTopic(topicObj: { name: string }): Promise<Topic> {
    nextId += 1;
    const newTopic = new Topic({ ...topicObj, id: String(nextId) });
    TOPICS.push(newTopic);

    return Promise.resolve(newTopic);
  }
}

export { PersistenceImpl };
