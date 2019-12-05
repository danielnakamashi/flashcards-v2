import { GetUser } from './GetUser';
import { UserPersistence } from '../services/UserPersistence';
import { UserPresenter } from '../presenters/UserPresenter';

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
