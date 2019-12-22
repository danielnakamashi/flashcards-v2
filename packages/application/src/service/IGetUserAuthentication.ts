import { User } from '@flashcards/core';

export interface IGetUserAuthentication {
  getUser(): Promise<User | null>;
}
