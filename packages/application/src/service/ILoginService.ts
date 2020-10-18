import { SignInProvider } from '@flashcards/core';
import { User } from '@flashcards/core';

export type ILoginService = {
  loginWithProvider(provider: SignInProvider): Promise<User | null>;
};
