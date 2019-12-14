import { User } from '../entities/User';
import { SignInProvider } from '../entities/enums/signin-provider';

export interface UserAuthentication {
  getUser(): Promise<User | null>;
  logout(): Promise<void>;
  loginWithProvider(provider: SignInProvider): Promise<User | null>;
}
