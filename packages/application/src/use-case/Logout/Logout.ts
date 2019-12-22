import { ILogoutInput, ILogoutAuthentication, ISetUserOutput } from '@flashcards/application';

class Logout implements ILogoutInput {
  userAuthentication: ILogoutAuthentication;
  userPresenter: ISetUserOutput;

  constructor(userAuthentication: ILogoutAuthentication, userPresenter: ISetUserOutput) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async logout() {
    await this.userAuthentication.logout();
    this.userPresenter.setUser(null);
  }
}

export { Logout };
