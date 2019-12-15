import { User } from '@flashcards/entities';
import { Enums as EntitiesEnums } from '@flashcards/entities';

export interface IUserAuthentication {
  getUser(): Promise<User | null>;
  logout(): Promise<void>;
  loginWithProvider(provider: EntitiesEnums.SignInProvider): Promise<User | null>;
}
