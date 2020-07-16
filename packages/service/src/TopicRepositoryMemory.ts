import { Topic, Card } from '@flashcards/core';
import { Service } from '@flashcards/application';

const USERS: { [key: string]: { TOPICS: Topic[] } } = {
  '1': {
    TOPICS: [
      new Topic({ id: '1', name: 'Topic 1' }),
      new Topic({ id: '2', name: 'Topic 2' }),
      new Topic({ id: '3', name: 'Topic 3' }),
    ],
  },
};
const CARDS: { [key: string]: Card[] } = {};
let nextTopicId = 3;
let nextCardId = 1;

class TopicRepositoryMemory implements Service.ITopicRepository {
  getTopicsByUser(uid: string): Promise<Topic[]> {
    return Promise.resolve(USERS[uid]?.TOPICS ?? []);
  }

  addCard(
    { question, answer }: { question: string; answer: string },
    topicId: string,
    uid: string,
  ): Promise<Card> {
    CARDS[topicId] = CARDS[topicId] ?? [];
    const card = new Card({ id: `${nextCardId++}`, question, answer });
    CARDS[topicId].push(card);

    return Promise.resolve(card);
  }

  addTopic({ name }: { name: string }, uid: string): Promise<Topic> {
    nextTopicId += 1;
    const newTopic = new Topic({ name, id: String(nextTopicId) });
    USERS[uid].TOPICS.push(newTopic);

    return Promise.resolve(newTopic);
  }

  removeTopic(uid: string, topicId: string): Promise<void> {
    USERS[uid].TOPICS = USERS[uid].TOPICS.filter((topic) => topic.id !== topicId);

    return Promise.resolve();
  }

  getTopicById(uid: string, topicId: string): Promise<Topic | null> {
    return Promise.resolve(USERS[uid]?.TOPICS.find((topic) => topic.id === topicId) ?? null);
  }
}

export { TopicRepositoryMemory };
