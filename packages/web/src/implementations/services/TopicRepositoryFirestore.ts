import firebase from 'firebase';
import { ITopicRepository } from '@flashcards/services';
import { Topic } from '@flashcards/entities';

const COLLECTION = Object.freeze({
  TOPICS: 'topics',
});

class TopicRepositoryFirestore implements ITopicRepository {
  _db: firebase.firestore.Firestore;

  constructor(db: firebase.firestore.Firestore) {
    this._db = db;
  }

  async addTopic({ name }: { name: string }, uid: string): Promise<Topic> {
    const docRef = await this._db.collection(COLLECTION.TOPICS).add({
      uid,
      name,
    });

    return new Topic({ id: docRef.id, name });
  }

  async getTopics(uid: string): Promise<Topic[]> {
    const topics: Topic[] = [];
    const querySnapshot = await this._db
      .collection(COLLECTION.TOPICS)
      .where('uid', '==', uid)
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

  async removeTopic(id: string): Promise<void> {
    return await this._db
      .collection(COLLECTION.TOPICS)
      .doc(id)
      .delete();
  }
}

export { TopicRepositoryFirestore };
