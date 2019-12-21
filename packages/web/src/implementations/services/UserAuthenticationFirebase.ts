import firebase from 'firebase';
import { IUserAuthentication } from '@flashcards/services';
import { User } from '@flashcards/entities';
import { Enums as EntitiEnums } from '@flashcards/entities';

//TODO: Add all supported auth providers
type AuthProviders = typeof firebase.auth.GoogleAuthProvider;
const FIREBASE_AUTH_PROVIDERS: { [key: string]: AuthProviders } = {
  Google: firebase.auth.GoogleAuthProvider,
};

class UserAuthenticationFirebase implements IUserAuthentication {
  _auth: firebase.auth.Auth;

  constructor(auth: firebase.auth.Auth) {
    this._auth = auth;
  }

  getUser(): Promise<User | null> {
    return new Promise(resolve => {
      this._auth.onAuthStateChanged(user => {
        resolve(user);
      });
    });
  }

  async logout(): Promise<void> {
    await this._auth.signOut();
  }

  async loginWithProvider(provider: EntitiEnums.SignInProvider): Promise<User | null> {
    const firebaseProvider = new FIREBASE_AUTH_PROVIDERS[provider]();
    if (!firebaseProvider) {
      return null;
    }

    const { user } = await this._auth.signInWithPopup(firebaseProvider);
    return user;
  }
}

export { UserAuthenticationFirebase };
