import { SignInProvider } from '@flashcards/core';
import { ILogin as ILoginInput } from '../../input';
import { ILogin as ILoginService } from '../../service';
import { ISetUser } from '../../output';

class Login implements ILoginInput {
  userAuthentication: ILoginService;
  userPresenter: ISetUser;

  constructor(userAuthentication: ILoginService, userPresenter: ISetUser) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async loginWithProvider(provider: SignInProvider) {
    const user = await this.userAuthentication.loginWithProvider(provider);

    this.userPresenter.setUser(user);
  }
}

export { Login };
