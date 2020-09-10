import { createDomain, Store, Event } from 'effector';
import { User } from '@flashcards/core';
import { ILoginPresenter } from './LoginPresenter';

class AppPresenter implements ILoginPresenter {
  #reset: Event<void>;
  #userStore: Store<User | null>;
  #setUser: Event<User | null>;

  constructor() {
    const domain = createDomain('app presenter');

    this.#reset = domain.event<void>('reset app presenter');

    domain.onCreateStore((store) => store.reset(this.#reset));

    this.#setUser = domain.event<User | null>('set user');
    this.#userStore = domain.store<User | null>(null).on(this.#setUser, (_, user) => user);
  }

  setUser(user: User | null): void {
    this.#setUser(user);
  }

  reset(): void {
    this.#reset();
  }

  get userStore(): Store<User | null> {
    return this.#userStore;
  }
}

export { AppPresenter };
