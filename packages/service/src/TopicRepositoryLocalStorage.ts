import { Topic, Card } from '@flashcards/core';
import { Service } from '@flashcards/application';

class TopicRepositoryLocalStorage implements Service.ITopicRepository {
  get topicsRepository(): { [key: string]: Topic[] } {
    const topicsRepository = window.localStorage.getItem('topicRepository');
    if (!topicsRepository) {
      window.localStorage.setItem('topicRepository', JSON.stringify({}));
    }

    return JSON.parse(window.localStorage.getItem('topicRepository') ?? JSON.stringify([]));
  }

  set topicsRepository(value: { [key: string]: Topic[] }) {
    window.localStorage.setItem('topicRepository', JSON.stringify(value));
  }

  getTopicsByUser(uid: string): Promise<Topic[]> {
    const topicsRepository = this.topicsRepository;
    if (topicsRepository[uid] === undefined) {
      topicsRepository[uid] = [];
      this.topicsRepository = topicsRepository;
    }

    return Promise.resolve(topicsRepository[uid]);
  }

  getTopicById(uid: string, topicId: string): Promise<Topic | null> {
    const topics = this.getTopicsByUser(uid);

    return topics.then(topics => topics.find(({ id }) => id === topicId) ?? null);
  }

  async addTopic(
    { name, cards = [] }: { name: string; cards: Card[] },
    uid: string,
  ): Promise<Topic> {
    const topicsRepository = this.topicsRepository;
    const topics = topicsRepository[uid] ?? [];
    const lastTopic = topics[topics.length - 1];
    const newId = (parseInt(lastTopic?.id ?? '0') + 1).toString();
    const newTopic = new Topic({ id: newId, name, cards });
    topics.push(newTopic);

    this.topicsRepository = {
      ...this.topicsRepository,
      [uid]: [...topics],
    };

    return Promise.resolve(newTopic);
  }

  removeTopic(uid: string, topicId: string): Promise<void> {
    const topicsRepository = this.topicsRepository;
    const topics = topicsRepository[uid] ?? [];
    const index = topics.findIndex(({ id }) => id === topicId);

    this.topicsRepository = {
      ...this.topicsRepository,
      [uid]: [...topics.splice(index, 1)],
    };

    return Promise.resolve();
  }

  private updateTopic(uid: string, topic: Topic): Promise<Topic> {
    this.topicsRepository = {
      ...this.topicsRepository,
      [uid]: this.topicsRepository[uid].map(userTopic => {
        if (userTopic.id === topic.id) {
          return topic;
        }

        return userTopic;
      }),
    };

    return Promise.resolve(topic);
  }

  async addCard(
    { question, answer }: { question: string; answer: string },
    topicId: string,
    uid: string,
  ): Promise<Card> {
    const topic = await this.getTopicById(uid, topicId);

    if (topic === null) {
      throw new Error('Topic not found');
    }

    const lastCard = topic.cards[topic.cards.length - 1];
    const newId = (parseInt(lastCard.id ?? '0') + 1).toString();
    const newCard = new Card({ id: newId, question, answer });
    topic.cards = [...topic.cards, newCard];

    await this.updateTopic(uid, topic);

    return newCard;
  }

  async getCardsByTopic(uid: string, topicId: string): Promise<Card[]> {
    const topic = await this.getTopicById(uid, topicId);

    if (topic === null) {
      throw new Error('Topic not found');
    }

    return topic.cards;
  }
}

export { TopicRepositoryLocalStorage };
