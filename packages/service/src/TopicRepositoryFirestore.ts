import firebase from 'firebase';
import {
  IAddTopicRepository,
  IRemoveTopicRepository,
  IShowTopicsRepository,
} from '@flashcards/application';
import { Topic } from '@flashcards/core';

const COLLECTION = Object.freeze({
  USERS: 'users',
  TOPICS: 'topics',
});

class TopicRepositoryFirestore
  implements IAddTopicRepository, IRemoveTopicRepository, IShowTopicsRepository {
  _db: firebase.firestore.Firestore;

  constructor(db: firebase.firestore.Firestore) {
    this._db = db;
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

  async getTopics(uid: string): Promise<Topic[]> {
    const topics: Topic[] = [];
    const querySnapshot = await this._db
      .collection(COLLECTION.USERS)
      .doc(uid)
      .collection(COLLECTION.TOPICS)
      .get();

    querySnapshot.forEach(doc => {
      const data = doc.data();

      topics.push(
        new Topic({
          id: doc.id,
          name: data.name,
        }),
      );
    });

    return topics;
  }

  async removeTopic({ uid, topicId }: { uid: string; topicId: string }): Promise<void> {
    return await this._db
      .collection(COLLECTION.USERS)
      .doc(uid)
      .collection(COLLECTION.TOPICS)
      .doc(topicId)
      .delete();
  }
}

export { TopicRepositoryFirestore };
