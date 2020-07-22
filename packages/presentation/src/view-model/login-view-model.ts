import { useStore } from 'effector-react';
import { SignInProvider, User } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { ILoginPresenter } from '../presenter/LoginPresenter';

export interface ILoginViewModel extends InputBoundary.ILoginInput {
  useUser(): User | null;
}

function loginViewModel(
  loginPresenter: ILoginPresenter,
  login: InputBoundary.ILoginInput,
): ILoginViewModel {
  return {
    useUser(): User | null {
      return useStore(loginPresenter.userStore);
    },
    loginWithProvider(provider: SignInProvider): void {
      return login.loginWithProvider(provider);
    },
  };
}

export { loginViewModel };
