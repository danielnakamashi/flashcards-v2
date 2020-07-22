import { useStore } from 'effector-react';
import { User } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { AppPresenter } from '../presenter/AppPresenter';

export interface IAppViewModel
  extends InputBoundary.IGetCurrentUserInput,
    InputBoundary.ILogoutInput {
  useUser(): User | null;
}

function appViewModel(
  appPresenter: AppPresenter,
  getCurrentUser: InputBoundary.IGetCurrentUserInput,
  logout: InputBoundary.ILogoutInput,
): IAppViewModel {
  return {
    getCurrentUser(): void {
      getCurrentUser.getCurrentUser();
    },
    useUser(): User | null {
      return useStore(appPresenter.userStore);
    },
    logout(): void {
      logout.logout();
    },
  };
}

export { appViewModel };
