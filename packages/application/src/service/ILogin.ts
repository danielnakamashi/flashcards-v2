import { SignInProvider } from '@flashcards/core';
import { User } from '@flashcards/core';

export interface ILogin {
  loginWithProvider(provider: SignInProvider): Promise<User | null>;
}
