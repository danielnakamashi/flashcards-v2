import firebase from '../config/firebase';
import { UserPersistence } from '../../core/services/UserPersistence';
import { User } from '../../core/entities/User';

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
