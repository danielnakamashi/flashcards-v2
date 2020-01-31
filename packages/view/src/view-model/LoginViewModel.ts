import { useStore } from 'effector-react';
import { SignInProvider, User } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { ILoginPresenter } from '../presenter/LoginPresenter';

export interface ILoginViewModel extends InputBoundary.ILogin {
  useUser(): User | null;
}

let _loginPresenter: ILoginPresenter;
let _login: InputBoundary.ILogin;

const LoginViewModel = (loginPresenter: ILoginPresenter, login: InputBoundary.ILogin) => {
  _loginPresenter = loginPresenter;
  _login = login;
};

const useUser = (): User | null => {
  return useStore(_loginPresenter.userStore);
};

const loginWithProvider = (provider: SignInProvider): void => {
  return _login.loginWithProvider(provider);
};

// class LoginViewModel implements ILoginViewModel {
//   _loginPresenter: ILoginPresenter;
//   _login: InputBoundary.ILogin;

//   constructor(loginPresenter: ILoginPresenter, login: InputBoundary.ILogin) {
//     this._loginPresenter = loginPresenter;
//     this._login = login;
//   }

//   useUser(): User | null {
//     return useStore(this._loginPresenter.userStore);
//   }

//   loginWithProvider(provider: SignInProvider): void {
//     return this._login.loginWithProvider(provider);
//   }
// }

export default LoginViewModel;
export { useUser, loginWithProvider };
