import { Logout } from 'core/use-cases/Logout';
import { UserAuthentication } from 'core/services/UserAuthentication';
import { UserPresenter } from 'core/presenters/UserPresenter';

class LogoutImpl implements Logout {
  userAuthentication: UserAuthentication;
  userPresenter: UserPresenter;

  constructor(userPersistence: UserAuthentication, userPresenter: UserPresenter) {
    this.userAuthentication = userPersistence;
    this.userPresenter = userPresenter;
  }

  async logout() {
    await this.userAuthentication.logout();
    this.userPresenter.setUser(null);
  }
}

export { LogoutImpl };
