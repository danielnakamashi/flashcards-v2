import { IUserAuthentication } from '@flashcards/services';
import { IUserPresenter } from '@flashcards/presenters';

export interface ILogout {
  logout(): void;
}

class Logout implements ILogout {
  userAuthentication: IUserAuthentication;
  userPresenter: IUserPresenter;

  constructor(userAuthentication: IUserAuthentication, userPresenter: IUserPresenter) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async logout() {
    await this.userAuthentication.logout();
    this.userPresenter.setUser(null);
  }
}

export { Logout };
