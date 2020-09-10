import { Store } from 'effector';
import { User } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { AppPresenter } from '../presenter/AppPresenter';

export interface IAppViewModel
  extends InputBoundary.IGetCurrentUserInput,
    InputBoundary.ILogoutInput {
  getUserStore(): Store<User | null>;
}

function appViewModel(
  appPresenter: AppPresenter,
  getCurrentUser: InputBoundary.IGetCurrentUserInput,
  logout: InputBoundary.ILogoutInput,
): IAppViewModel {
  return {
    getCurrentUser: (): void => {
      getCurrentUser.getCurrentUser();
    },
    getUserStore: (): Store<User | null> => {
      return appPresenter.userStore;
    },
    logout: (): void => {
      logout.logout();
    },
  };
}

export { appViewModel };
