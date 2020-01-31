import { createStore, createEvent } from 'effector';
import { User } from '@flashcards/core';
import { ILoginPresenter } from './LoginPresenter';

class AppPresenter implements ILoginPresenter {
  _userStore = createStore<User | null>(null);
  _setUser = createEvent<User | null>('set user');

  constructor() {
    this._userStore.on(this._setUser, (_, user) => user);
  }

  setUser(user: User | null): void {
    this._setUser(user);
  }

  get userStore() {
    return this._userStore;
  }
}

export { AppPresenter };
