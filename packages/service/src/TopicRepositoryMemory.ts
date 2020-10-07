import { Card, Topic } from '@flashcards/core';
import { Service } from '@flashcards/application';

class TopicRepositoryMemory implements Service.ITopicRepositoryService {
  _users: { [key: string]: { TOPICS: Record<string, Topic> } };
  _cards: { [key: string]: Card[] };
  _nextTopicId: number;
  _nextCardId: number;

  constructor() {
    this._users = {
      '1': {
        TOPICS: {
          '1': new Topic({ id: '1', name: 'Topic 1' }),
          '2': new Topic({
            id: '2',
            name: 'Topic 2',
            cards: [
              new Card({ id: '1', question: 'Question 1', answer: 'Answer 1' }),
              new Card({ id: '2', question: 'Question 2', answer: 'Answer 2' }),
            ],
          }),
          '3': new Topic({ id: '3', name: 'Topic 3' }),
        },
      },
    };
    this._cards = {};
    this._nextTopicId = 3;
    this._nextCardId = 1;
  }

  getTopicsByUser(uid: string): Promise<Topic[]> {
    return Promise.resolve(Object.values(this._users[uid]?.TOPICS) ?? []);
  }

  addCard(
    { question, answer }: { question: string; answer: string },
    topicId: string,
    uid: string,
  ): Promise<Card> {
    const card = new Card({ id: `${this._nextCardId++}`, question, answer });
    this._users[uid].TOPICS[topicId].cards.push(card);

    return Promise.resolve(card);
  }

  removeCard(uid: string, topicId: string, cardId: string): Promise<void> {
    const topic = this._users[uid]?.TOPICS[topicId];
    topic.cards = topic.cards.filter((card) => card.id !== cardId);

    return Promise.resolve();
  }

  addTopic({ name }: { name: string }, uid: string): Promise<Topic> {
    this._nextTopicId += 1;
    const newTopic = new Topic({ name, id: String(this._nextTopicId) });
    this._users[uid] = this._users[uid] ?? { TOPICS: [] };
    this._users[uid].TOPICS[newTopic.id] = newTopic;

    return Promise.resolve(newTopic);
  }

  removeTopic(uid: string, topicId: string): Promise<void> {
    delete this._users[uid].TOPICS[topicId];

    return Promise.resolve();
  }

  getTopicById(uid: string, topicId: string): Promise<Topic | null> {
    return Promise.resolve(this._users[uid]?.TOPICS[topicId]);
  }
}

export { TopicRepositoryMemory };
