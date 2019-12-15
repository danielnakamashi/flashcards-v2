import { User } from '@flashcards/entities';

export interface IUserPresenter {
  setUser(user: User | null): void;
}
