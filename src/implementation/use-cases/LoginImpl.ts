import { UserPersistence } from 'core/services/UserPersistence';
import { UserPresenter } from 'core/presenters/UserPresenter';
import { Login } from 'core/use-cases/Login';
import { SignInProvider } from 'core/entities/enums/signin-provider';

class LoginImpl implements Login {
  userPersistence: UserPersistence;
  userPresenter: UserPresenter;

  constructor(userPersistence: UserPersistence, userPresenter: UserPresenter) {
    this.userPersistence = userPersistence;
    this.userPresenter = userPresenter;
  }

  async loginWithProvider(provider: SignInProvider) {
    const user = await this.userPersistence.loginWithProvider(provider);

    this.userPresenter.setUser(user);
  }
}

export { LoginImpl };
