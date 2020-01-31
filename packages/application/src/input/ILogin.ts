import { SignInProvider } from '@flashcards/core';

export interface ILogin {
  loginWithProvider(provider: SignInProvider): void;
}
