import { GetUser } from 'core/use-cases/GetUser';
import { UserAuthentication } from 'core/services/UserAuthentication';
import { UserPresenter } from 'core/presenters/UserPresenter';

class GetUserImpl implements GetUser {
  userAuthentication: UserAuthentication;
  userPresenter: UserPresenter;

  constructor(userAuthentication: UserAuthentication, userPresenter: UserPresenter) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async get() {
    const user = await this.userAuthentication.getUser();
    this.userPresenter.setUser(user);
  }
}

export { GetUserImpl };
