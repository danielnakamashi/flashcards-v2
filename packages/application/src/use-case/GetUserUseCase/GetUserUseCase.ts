import { IGetCurrentUserInput } from '../../input';
import { IGetUserService } from '../../service';
import { ISetUserOutput } from '../../output';

class GetUser implements IGetCurrentUserInput {
  userAuthentication: IGetUserService;
  userPresenter: ISetUserOutput;

  constructor(userAuthentication: IGetUserService, userPresenter: ISetUserOutput) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async getCurrentUser() {
    const user = await this.userAuthentication.getUser();
    this.userPresenter.setUser(user);
  }
}

export { GetUser };
