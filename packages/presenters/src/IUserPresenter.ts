import { User } from '@flashcards/entities';
import { Store } from 'effector';

export interface IUserPresenter {
  readonly userStore: Store<User | null>;

  setUser(user: User | null): void;
  reset(): void;
}
