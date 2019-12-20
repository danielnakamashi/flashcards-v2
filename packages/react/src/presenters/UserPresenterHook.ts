import { Store } from 'effector';
import { useStore } from 'effector-react';
import { IUserPresenter } from '@flashcards/presenters';
import { User } from '@flashcards/entities';

export interface IUserPresenterHook extends IUserPresenter {
  useUser(): User | null;
}

class UserPresenterHook implements IUserPresenterHook {
  userStore: Store<User | null>;
  _userPresenter: IUserPresenter;

  constructor(userPresenter: IUserPresenter) {
    this._userPresenter = userPresenter;
    this.userStore = this._userPresenter.userStore;
  }

  getUser(): User | null {
    return this._userPresenter.userStore.getState();
  }

  reset() {
    return this._userPresenter.reset();
  }

  setUser(user: User | null) {
    return this._userPresenter.setUser(user);
  }

  useUser(): User | null {
    return useStore(this._userPresenter.userStore);
  }
}

export { UserPresenterHook };
