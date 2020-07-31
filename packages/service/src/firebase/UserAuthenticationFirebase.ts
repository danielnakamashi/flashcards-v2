import firebase from 'firebase';
import { Service } from '@flashcards/application';
import { User, SignInProvider } from '@flashcards/core';
import initialize, { FirebaseConfig } from './initialize';

//TODO: Add all supported auth providers
type AuthProviders = typeof firebase.auth.GoogleAuthProvider;
const FIREBASE_AUTH_PROVIDERS: { [key: string]: AuthProviders } = {
  Google: firebase.auth.GoogleAuthProvider,
};

class UserAuthenticationFirebase implements Service.IUserService {
  _auth: firebase.auth.Auth;

  constructor(firebaseConfig: FirebaseConfig) {
    this._auth = initialize(firebaseConfig).auth();
  }

  getUser(): Promise<User | null> {
    return new Promise((resolve) => {
      this._auth.onAuthStateChanged((user) => {
        resolve(user);
      });
    });
  }

  async logout(): Promise<void> {
    await this._auth.signOut();
  }

  async loginWithProvider(provider: SignInProvider): Promise<User | null> {
    const firebaseProvider = new FIREBASE_AUTH_PROVIDERS[provider]();
    if (!firebaseProvider) {
      return null;
    }

    const { user } = await this._auth.signInWithPopup(firebaseProvider);
    return user;
  }
}

export { UserAuthenticationFirebase };
