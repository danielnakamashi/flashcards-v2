import firebase from 'firebase/app';
import 'firebase/firestore';
import { Service } from '@flashcards/application';
import { Card, Topic } from '@flashcards/core';
import { FirebaseConfig } from './types';

const COLLECTION = Object.freeze({
  USERS: 'users',
  TOPICS: 'topics',
  CARDS: 'cards',
});

class TopicRepositoryFirestore implements Service.ITopicRepositoryService {
  _db: firebase.firestore.Firestore;

  constructor(firebaseConfig: FirebaseConfig) {
    this._db = firebase.apps.length
      ? firebase.app().firestore()
      : firebase.initializeApp(firebaseConfig).firestore();
  }

  async addCard(
    { question, answer }: { question: string; answer: string },
    topicId: string,
    uid: string,
  ): Promise<Card> {
    const docRef = await this._db
      .collection(COLLECTION.USERS)
      .doc(uid)
      .collection(COLLECTION.TOPICS)
      .doc(topicId)
      .collection(COLLECTION.CARDS)
      .add({ question, answer });

    return new Card({ id: docRef.id, question, answer });
  }

  async addTopic({ name }: { name: string }, uid: string): Promise<Topic> {
    const docRef = await this._db
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
    const querySnapshot = await this._db
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
    return await this._db
      .collection(COLLECTION.USERS)
      .doc(uid)
      .collection(COLLECTION.TOPICS)
      .doc(topicId)
      .delete();
  }

  async getTopicById(uid: string, topicId: string): Promise<Topic | null> {
    const topicDocRef = this._db
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

export { TopicRepositoryFirestore };
