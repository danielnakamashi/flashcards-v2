import admin from 'firebase-admin';
import { Card, Topic } from '@flashcards/core';
import { Service } from '@flashcards/application';

const COLLECTION = Object.freeze({
  USERS: 'users',
  TOPICS: 'topics',
  CARDS: 'cards',
});

class TopicRepositoryServer implements Service.ITopicRepositoryService {
  private db: admin.firestore.Firestore;

  constructor() {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
    this.db = admin.firestore();
  }

  async addCard(
    { question, answer }: { question: string; answer: string },
    topicId: string,
    uid: string,
  ): Promise<Card> {
    const docRef = await this.db
      .collection(COLLECTION.USERS)
      .doc(uid)
      .collection(COLLECTION.TOPICS)
      .doc(topicId)
      .collection(COLLECTION.CARDS)
      .add({ question, answer });

    return new Card({ id: docRef.id, question, answer });
  }

  async removeCard(uid: string, topicId: string, cardId: string): Promise<void> {
    await this.db
      .collection(COLLECTION.USERS)
      .doc(uid)
      .collection(COLLECTION.TOPICS)
      .doc(topicId)
      .collection(COLLECTION.CARDS)
      .doc(cardId)
      .delete();
  }

  async addTopic({ name }: { name: string }, uid: string): Promise<Topic> {
    const docRef = await this.db
      .collection(COLLECTION.USERS)
      .doc(uid)
      .collection(COLLECTION.TOPICS)
      .add({
        name,
      });

    return new Topic({ id: docRef.id, name });
  }

  async getTopicsByUser(uid: string): Promise<Topic[]> {
    const topics: Topic[] = [];
    const querySnapshot = await this.db
      .collection(COLLECTION.USERS)
      .doc(uid)
      .collection(COLLECTION.TOPICS)
      .get();

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      topics.push(
        new Topic({
          id: doc.id,
          name: data.name as string,
        }),
      );
    });

    return topics;
  }

  async removeTopic(uid: string, topicId: string): Promise<void> {
    await this.db
      .collection(COLLECTION.USERS)
      .doc(uid)
      .collection(COLLECTION.TOPICS)
      .doc(topicId)
      .delete();
  }

  async getTopicById(uid: string, topicId: string): Promise<Topic | null> {
    const topicDocRef = this.db
      .collection(COLLECTION.USERS)
      .doc(uid)
      .collection(COLLECTION.TOPICS)
      .doc(topicId);
    const topicQuerySnapshot = await topicDocRef.get();
    const topicData = topicQuerySnapshot.data() as Omit<Topic, 'id'>;

    if (!topicData) {
      return null;
    }

    const cardsQuerySnapshot = await topicDocRef.collection('cards').get();
    const cards: Card[] = [];
    cardsQuerySnapshot.forEach((docSnapshot) => {
      const { id } = docSnapshot;
      const cardData = docSnapshot.data() as Omit<Card, 'id'>;

      cards.push(new Card({ id, ...cardData }));
    });

    return new Topic({ id: topicId, ...topicData, cards });
  }
}

export { TopicRepositoryServer };
