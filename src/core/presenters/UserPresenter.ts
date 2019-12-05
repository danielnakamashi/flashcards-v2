import { User } from '../entities/User';

export interface UserPresenter {
  setUser(user: User | null): void;
}
