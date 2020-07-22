import { SignInProvider } from '@flashcards/core';
import { User } from '@flashcards/core';

export interface ILoginService {
  loginWithProvider(provider: SignInProvider): Promise<User | null>;
}
