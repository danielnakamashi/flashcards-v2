import { createDomain, Store, Event } from 'effector';
import { User } from '@flashcards/core';
import { ILoginPresenter } from './LoginPresenter';

class AppPresenter implements ILoginPresenter {
  _reset: Event<void>;
  _userStore: Store<User | null>;
  _setUser: Event<User | null>;

  constructor() {
    const domain = createDomain('app presenter');

    this._reset = domain.event<void>('reset app presenter');

    domain.onCreateStore((store) => store.reset(this._reset));

    this._setUser = domain.event<User | null>('set user');
    this._userStore = domain.store<User | null>(null).on(this._setUser, (_, user) => user);
  }

  setUser(user: User | null): void {
    this._setUser(user);
  }

  reset() {
    this._reset();
  }

  get userStore() {
    return this._userStore;
  }
}

export { AppPresenter };
