import { createDomain, Store, Event } from 'effector';
import { User } from '@flashcards/core';
import { OutputBoundary } from '@flashcards/application';

export interface ILoginPresenter extends OutputBoundary.ISetUserOutput {
  readonly userStore: Store<User | null>;
  reset: () => void;
}

class LoginPresenter implements ILoginPresenter {
  private _reset: Event<void>;
  private _userStore: Store<User | null>;
  private _setUser: Event<User>;

  constructor() {
    const domain = createDomain('login presenter');

    this._reset = domain.event<void>('reset login presenter');

    domain.onCreateStore((store) => store.reset(this._reset));

    this._setUser = domain.event<User>('set user');
    this._userStore = domain.store<User | null>(null).on(this._setUser, (_, user) => user);
  }

  get userStore(): Store<User | null> {
    return this._userStore;
  }

  setUser(user: User): void {
    this._setUser(user);
  }

  reset(): void {
    this._reset();
  }
}

export { LoginPresenter };
