import { SignInProvider } from '../entities/enums/signin-provider';

export interface Login {
  loginWithProvider(provider: SignInProvider): void;
}
