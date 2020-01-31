import { createStore, createEvent, Store } from 'effector';
import { User } from '@flashcards/core';
import { OutputBoundary } from '@flashcards/application';

export interface ILoginPresenter extends OutputBoundary.ISetUser {
  readonly userStore: Store<User | null>;
}

class LoginPresenter implements ILoginPresenter {
  _userStore = createStore<User | null>(null);
  _setUser = createEvent<User>('set user');

  constructor() {
    this._userStore.on(this._setUser, (_, user) => user);
  }

  get userStore(): Store<User | null> {
    return this._userStore;
  }

  setUser(user: User): void {
    this._setUser(user);
  }
}

export { LoginPresenter };
