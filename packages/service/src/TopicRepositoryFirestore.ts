import firebase from './config/firebase';
import { Service } from '@flashcards/application';
import { Topic } from '@flashcards/core';

const COLLECTION = Object.freeze({
  USERS: 'users',
  TOPICS: 'topics',
});

class TopicRepositoryFirestore implements Service.ITopicRepository {
  _db: firebase.firestore.Firestore = firebase.firestore();

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

  async removeTopic(uid: string, topicId: string): Promise<void> {
    return await this._db
      .collection(COLLECTION.USERS)
      .doc(uid)
      .collection(COLLECTION.TOPICS)
      .doc(topicId)
      .delete();
  }

  async getTopicById(uid: string, topicId: string): Promise<Topic | null> {
    const querySnapshot = await this._db
      .collection(COLLECTION.USERS)
      .doc(uid)
      .collection(COLLECTION.TOPICS)
      .doc(topicId)
      .get();
    const data = querySnapshot.data();

    if (!data) {
      return null;
    }

    return new Topic({ id: topicId, name: data.name });
  }
}

export { TopicRepositoryFirestore };
