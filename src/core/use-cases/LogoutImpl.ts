import { Logout } from './Logout';
import { UserPersistence } from '../services/UserPersistence';
import { UserPresenter } from '../presenters/UserPresenter';

class LogoutImpl implements Logout {
  userPersistence: UserPersistence;
  userPresenter: UserPresenter;

  constructor(userPersistence: UserPersistence, userPresenter: UserPresenter) {
    this.userPersistence = userPersistence;
    this.userPresenter = userPresenter;
  }

  async logout() {
    await this.userPersistence.logout();
    this.userPresenter.setUser(null);
  }
}

export { LogoutImpl };
