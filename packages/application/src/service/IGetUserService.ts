import { User } from '@flashcards/core';

export type IGetUserService = {
  getUser(): Promise<User | null>;
};
