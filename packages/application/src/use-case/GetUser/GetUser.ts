import { IGetCurrentUser } from '../../input';
import { IGetUser as IGetUserRepository } from '../../service';
import { ISetUser } from '../../output';

class GetUser implements IGetCurrentUser {
  userAuthentication: IGetUserRepository;
  userPresenter: ISetUser;

  constructor(userAuthentication: IGetUserRepository, userPresenter: ISetUser) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async getCurrentUser() {
    const user = await this.userAuthentication.getUser();
    this.userPresenter.setUser(user);
  }
}

export { GetUser };
