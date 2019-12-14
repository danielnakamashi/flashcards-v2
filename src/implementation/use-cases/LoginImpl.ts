import { UserAuthentication } from 'core/services/UserAuthentication';
import { UserPresenter } from 'core/presenters/UserPresenter';
import { Login } from 'core/use-cases/Login';
import { SignInProvider } from 'core/entities/enums/signin-provider';

class LoginImpl implements Login {
  userAuthentication: UserAuthentication;
  userPresenter: UserPresenter;

  constructor(userAuthentication: UserAuthentication, userPresenter: UserPresenter) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async loginWithProvider(provider: SignInProvider) {
    const user = await this.userAuthentication.loginWithProvider(provider);

    this.userPresenter.setUser(user);
  }
}

export { LoginImpl };
