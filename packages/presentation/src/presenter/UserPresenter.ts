import { createDomain, Store, Event } from 'effector';
import { User } from '@flashcards/core';
import { OutputBoundary } from '@flashcards/application';

export interface IUserPresenterHook extends OutputBoundary.ISetUserOutput {
  getUserStore(): Store<User | null>;
  reset(): void;
}

class UserPresenter implements IUserPresenterHook {
  _userStore: Store<User | null>; // = createStore<User | null>(null);
  _setUser: Event<User | null>; // = createEvent<User | null>('set user');
  _reset: Event<void>; // = createEvent<void>('reset user');

  constructor() {
    const domain = createDomain('user presenter');

    this._reset = domain.event<void>('reset user');

    domain.onCreateStore((store) => store.reset(this._reset));

    this._setUser = domain.event<User | null>('set user');
    this._userStore = domain.store<User | null>(null).on(this._setUser, (_, user) => user);
  }

  getUser(): User | null {
    return this._userStore.getState();
  }

  reset(): void {
    this._reset();
  }

  setUser(user: User | null): void {
    this._setUser(user);
  }

  getUserStore(): Store<User | null> {
    return this._userStore;
  }
}

export { UserPresenter };
