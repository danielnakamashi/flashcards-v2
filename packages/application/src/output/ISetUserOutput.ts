import { User } from '@flashcards/core';

export interface ISetUserOutput {
  setUser(user: User | null): void;
}
