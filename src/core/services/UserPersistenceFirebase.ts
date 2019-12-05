import firebase from '../config/firebase';
import { UserPersistence } from './UserPersistence';
import { User } from '../entities/User';

const userPersistenceFirebase: UserPersistence = {
  getUser(): Promise<User | null> {
    return new Promise(resolve => {
      firebase.auth().onAuthStateChanged(user => {
        resolve(user);
      });
    });
  },

  async logout(): Promise<void> {
    await firebase.auth().signOut();
  },
};

export { userPersistenceFirebase };
