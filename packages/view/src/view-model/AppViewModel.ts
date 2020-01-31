import { useStore } from 'effector-react';
import { User } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { AppPresenter } from '../presenter/AppPresenter';

export interface IAppViewModel extends InputBoundary.IGetCurrentUser, InputBoundary.ILogout {
  useUser(): User | null;
}

let _appPresenter: AppPresenter;
let _getCurrentUser: InputBoundary.IGetCurrentUser;
let _logout: InputBoundary.ILogout;

const AppViewModel = (
  appPresenter: AppPresenter,
  getCurrentUser: InputBoundary.IGetCurrentUser,
  logout: InputBoundary.ILogout,
) => {
  _appPresenter = appPresenter;
  _getCurrentUser = getCurrentUser;
  _logout = logout;
};

const getCurrentUser = (): void => {
  _getCurrentUser.getCurrentUser();
};

const useUser = (): User | null => {
  return useStore(_appPresenter.userStore);
};

const logout = (): void => {
  _logout.logout();
};

export default AppViewModel;
export { getCurrentUser, useUser, logout };
