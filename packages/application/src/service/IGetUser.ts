import { User } from '@flashcards/core';

export interface IGetUser {
  getUser(): Promise<User | null>;
}
