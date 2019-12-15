import { IUserAuthentication } from '@flashcards/services';
import { IUserPresenter } from '@flashcards/presenters';
import { Enums as EntitiesEnums } from '@flashcards/entities';

export interface ILogin {
  loginWithProvider(provider: EntitiesEnums.SignInProvider): void;
}

class Login implements ILogin {
  userAuthentication: IUserAuthentication;
  userPresenter: IUserPresenter;

  constructor(userAuthentication: IUserAuthentication, userPresenter: IUserPresenter) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async loginWithProvider(provider: EntitiesEnums.SignInProvider) {
    const user = await this.userAuthentication.loginWithProvider(provider);

    this.userPresenter.setUser(user);
  }
}

export { Login };
