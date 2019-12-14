import firebase from '../config/firebase';
import { UserAuthentication } from 'core/services/UserAuthentication';
import { User } from 'core/entities/User';
import { SignInProvider } from 'core/entities/enums/signin-provider';

//TODO: Add all supported auth providers
type AuthProviders = typeof firebase.auth.GoogleAuthProvider | typeof firebase.auth.FacebookAuthProvider;
const FIREBASE_AUTH_PROVIDERS: { [key: string]: AuthProviders } = {
  Google: firebase.auth.GoogleAuthProvider,
  Facebook: firebase.auth.FacebookAuthProvider,
};

const userAuthenticationFirebase: UserAuthentication = {
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

  async loginWithProvider(provider: SignInProvider): Promise<User | null> {
    const firebaseProvider = new FIREBASE_AUTH_PROVIDERS[provider]();
    if (!firebaseProvider) {
      return null;
    }

    const { user } = await firebase.auth().signInWithPopup(firebaseProvider);
    return user;
  },
};

export { userAuthenticationFirebase };
