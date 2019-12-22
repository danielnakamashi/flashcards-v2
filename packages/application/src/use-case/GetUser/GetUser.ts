import { IGetUserInput } from '../../input/IGetUserInput';
import { IGetUserAuthentication } from '../../service/IGetUserAuthentication';
import { ISetUserOutput } from '../../output/ISetUserOutput';

class GetUser implements IGetUserInput {
  userAuthentication: IGetUserAuthentication;
  userPresenter: ISetUserOutput;

  constructor(userAuthentication: IGetUserAuthentication, userPresenter: ISetUserOutput) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async getUser() {
    const user = await this.userAuthentication.getUser();
    this.userPresenter.setUser(user);
  }
}

export { GetUser };
