import { createDomain, Store, Event } from 'effector';
import { User } from '@flashcards/core';
import { OutputBoundary } from '@flashcards/application';
import { useStore } from 'effector-react';

export interface IUserPresenterHook extends OutputBoundary.ISetUser {
  useUser(): User | null;
  reset(): void;
}

class UserPresenter implements IUserPresenterHook {
  _userStore: Store<User | null>; // = createStore<User | null>(null);
  _setUser: Event<User | null>; // = createEvent<User | null>('set user');
  _reset: Event<void>; // = createEvent<void>('reset user');

  constructor() {
    const domain = createDomain('user presenter');

    this._reset = domain.event<void>('reset user');

    domain.onCreateStore(store => store.reset(this._reset));

    this._setUser = domain.event<User | null>('set user');
    this._userStore = domain.store<User | null>(null).on(this._setUser, (_, user) => user);
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
