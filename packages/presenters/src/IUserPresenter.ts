import { User } from '@flashcards/entities';

export interface IUserPresenter {
  setUser(user: User | null): void;
  useUser(): User | null;
  reset(): void;
}
