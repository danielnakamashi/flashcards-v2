import { createStore, createEvent } from 'effector';
import { User } from '@flashcards/entities';
import { IUserPresenter } from '@flashcards/presenters';

class UserPresenter implements IUserPresenter {
  userStore = createStore<User | null>(null);
  _setUser = createEvent<User | null>('set user');
  _reset = createEvent<void>('reset user');

  constructor() {
    this.userStore.on(this._setUser, (_, user) => user).reset(this._reset);
  }

  reset() {
    return this._reset();
  }

  setUser(user: User | null) {
    return this._setUser(user);
  }
}

export { UserPresenter };
