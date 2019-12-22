import { SignInProvider } from '@flashcards/core';

export interface ILoginInput {
  loginWithProvider(provider: SignInProvider): void;
}
