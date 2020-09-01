import { Store } from 'effector';
import { SignInProvider, User } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { ILoginPresenter } from '../presenter/LoginPresenter';

export interface ILoginViewModel extends InputBoundary.ILoginInput {
  useUser(): Store<User | null>;
}

function loginViewModel(
  loginPresenter: ILoginPresenter,
  login: InputBoundary.ILoginInput,
): ILoginViewModel {
  return {
    useUser(): Store<User | null> {
      return loginPresenter.userStore;
    },
    loginWithProvider(provider: SignInProvider): void {
      return login.loginWithProvider(provider);
    },
  };
}

export { loginViewModel };
