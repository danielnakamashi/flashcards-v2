import { SignInProvider } from '@flashcards/core';
import { User } from '@flashcards/core';

export interface ILoginAuthentication {
  loginWithProvider(provider: SignInProvider): Promise<User | null>;
}
