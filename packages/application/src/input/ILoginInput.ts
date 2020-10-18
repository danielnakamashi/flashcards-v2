import { SignInProvider } from '@flashcards/core';

export type ILoginInput = {
  loginWithProvider(provider: SignInProvider): void;
};
