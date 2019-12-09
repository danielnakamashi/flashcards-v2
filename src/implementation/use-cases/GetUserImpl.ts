import { GetUser } from '../../core/use-cases/GetUser';
import { UserPersistence } from '../../core/services/UserPersistence';
import { UserPresenter } from '../../core/presenters/UserPresenter';

class GetUserImpl implements GetUser {
  userPersistence: UserPersistence;
  userPresenter: UserPresenter;

  constructor(userPersistence: UserPersistence, userPresenter: UserPresenter) {
    this.userPersistence = userPersistence;
    this.userPresenter = userPresenter;
  }

  async get() {
    const user = await this.userPersistence.getUser();
    this.userPresenter.setUser(user);
  }
}

export { GetUserImpl };
