import { User } from '../entities/User';

export interface UserPersistence {
  getUser(): Promise<User | null>;
  logout(): Promise<void>;
}
