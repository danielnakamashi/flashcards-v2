import { createStore, createEvent } from 'effector';
import { User } from '@flashcards/entities';
import { IUserPresenter } from '@flashcards/presenters';
import { useStore } from 'effector-react';

export interface IUserPresenterHook extends IUserPresenter {
  useUser(): User | null;
  reset(): void;
}

class UserPresenter implements IUserPresenterHook {
  _userStore = createStore<User | null>(null);
  _setUser = createEvent<User | null>('set user');
  _reset = createEvent<void>('reset user');

  constructor() {
    this._userStore.on(this._setUser, (_, user) => user).reset(this._reset);
  }

  getUser(): User | null {
    return this._userStore.getState();
  }

  reset() {
    return this._reset();
  }

  setUser(user: User | null) {
    return this._setUser(user);
  }

  useUser(): User | null {
    return useStore(this._userStore);
  }
}

export { UserPresenter };
