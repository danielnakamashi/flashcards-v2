import { User } from '@flashcards/core';

export type ISetUserOutput = {
  setUser(user: User | null): void;
};
