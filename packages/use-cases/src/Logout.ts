import { IUserAuthentication } from '@flashcards/services';
import { IUserPresenter } from '@flashcards/presenters';

export interface ILogout {
  logout(): void;
}

class Logout implements ILogout {
  userAuthentication: IUserAuthentication;
  userPresenter: IUserPresenter;

  constructor(userPersistence: IUserAuthentication, userPresenter: IUserPresenter) {
    this.userAuthentication = userPersistence;
    this.userPresenter = userPresenter;
  }

  async logout() {
    await this.userAuthentication.logout();
    this.userPresenter.setUser(null);
  }
}

export { Logout };
