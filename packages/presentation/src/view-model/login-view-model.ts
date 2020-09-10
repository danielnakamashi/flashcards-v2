import { SignInProvider } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { ILoginPresenter } from '../presenter/LoginPresenter';

function loginViewModel(
  loginPresenter: ILoginPresenter,
  login: InputBoundary.ILoginInput,
): InputBoundary.ILoginInput {
  return {
    loginWithProvider(provider: SignInProvider): void {
      return login.loginWithProvider(provider);
    },
  };
}

export { loginViewModel };
