import { createStore, createEvent } from 'effector';
import { User } from '@flashcards/core';
import { ISetUserOutput } from '@flashcards/application';
import { useStore } from 'effector-react';

export interface IUserPresenterHook {
  useUser(): User | null;
  reset(): void;
}

class UserPresenter implements IUserPresenterHook, ISetUserOutput {
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
