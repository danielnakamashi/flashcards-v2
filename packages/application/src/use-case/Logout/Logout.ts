import { ILogout as ILogoutInput } from '../../input';
import { ILogout as ILogoutAuthentication } from '../../service';
import { ISetUser } from '../../output';

class Logout implements ILogoutInput {
  userAuthentication: ILogoutAuthentication;
  userPresenter: ISetUser;

  constructor(userAuthentication: ILogoutAuthentication, userPresenter: ISetUser) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async logout() {
    await this.userAuthentication.logout();
    this.userPresenter.setUser(null);
  }
}

export { Logout };
