import { createDomain, Store, Event } from 'effector';
import { User } from '@flashcards/core';
import { OutputBoundary } from '@flashcards/application';

export type IUserPresenterHook = OutputBoundary.ISetUserOutput & {
  readonly userStore: Store<User | null>;
  reset(): void;
};

class UserPresenter implements IUserPresenterHook {
  private _userStore: Store<User | null>; // = createStore<User | null>(null);
  private _setUser: Event<User | null>; // = createEvent<User | null>('set user');
  private _reset: Event<void>; // = createEvent<void>('reset user');

  constructor() {
    const domain = createDomain('user presenter');

    this._reset = domain.event<void>('reset user');

    domain.onCreateStore((store) => store.reset(this._reset));

    this._setUser = domain.event<User | null>('set user');
    this._userStore = domain.store<User | null>(null).on(this._setUser, (_, user) => user);
  }

  reset(): void {
    this._reset();
  }

  setUser(user: User | null): void {
    this._setUser(user);
  }

  get userStore(): Store<User | null> {
    return this._userStore;
  }
}

export { UserPresenter };
