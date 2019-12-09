import { Logout } from '../../core/use-cases/Logout';
import { UserPersistence } from '../../core/services/UserPersistence';
import { UserPresenter } from '../../core/presenters/UserPresenter';

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
