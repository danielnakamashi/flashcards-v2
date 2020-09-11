import { Card, Topic } from '@flashcards/core';
import { Service } from '@flashcards/application';

class TopicRepositoryMemory implements Service.ITopicRepositoryService {
  _users: { [key: string]: { TOPICS: Topic[] } };
  _cards: { [key: string]: Card[] };
  _nextTopicId: number;
  _nextCardId: number;

  constructor() {
    this._users = {
      '1': {
        TOPICS: [
          new Topic({ id: '1', name: 'Topic 1' }),
          new Topic({ id: '2', name: 'Topic 2' }),
          new Topic({ id: '3', name: 'Topic 3' }),
        ],
      },
    };
    this._cards = {};
    this._nextTopicId = 3;
    this._nextCardId = 1;
  }

  getTopicsByUser(uid: string): Promise<Topic[]> {
    return Promise.resolve(this._users[uid]?.TOPICS ?? []);
  }

  addCard(
    { question, answer }: { question: string; answer: string },
    topicId: string,
    uid: string,
  ): Promise<Card> {
    this._cards[topicId] = this._cards[topicId] ?? [];
    const card = new Card({ id: `${this._nextCardId++}`, question, answer });
    this._cards[topicId].push(card);

    return Promise.resolve(card);
  }

  addTopic({ name }: { name: string }, uid: string): Promise<Topic> {
    this._nextTopicId += 1;
    const newTopic = new Topic({ name, id: String(this._nextTopicId) });
    this._users[uid] = this._users[uid] ?? { TOPICS: [] };
    this._users[uid].TOPICS.push(newTopic);

    return Promise.resolve(newTopic);
  }

  removeTopic(uid: string, topicId: string): Promise<void> {
    this._users[uid].TOPICS = this._users[uid].TOPICS.filter((topic) => topic.id !== topicId);

    return Promise.resolve();
  }

  getTopicById(uid: string, topicId: string): Promise<Topic | null> {
    return Promise.resolve(this._users[uid]?.TOPICS.find((topic) => topic.id === topicId) ?? null);
  }
}

export { TopicRepositoryMemory };
