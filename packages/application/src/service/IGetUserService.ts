import { User } from '@flashcards/core';

export interface IGetUserService {
  getUser(): Promise<User | null>;
}
