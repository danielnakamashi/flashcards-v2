import { IUserAuthentication } from '@flashcards/services';
import { IUserPresenter } from '@flashcards/presenters';

export interface IGetUser {
  get(): void;
}

class GetUser implements IGetUser {
  userAuthentication: IUserAuthentication;
  userPresenter: IUserPresenter;

  constructor(userAuthentication: IUserAuthentication, userPresenter: IUserPresenter) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async get() {
    const user = await this.userAuthentication.getUser();
    this.userPresenter.setUser(user);
  }
}

export { GetUser };
