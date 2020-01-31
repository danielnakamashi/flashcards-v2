import { User } from '@flashcards/core';

export interface ISetUser {
  setUser(user: User | null): void;
}
