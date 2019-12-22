import { SignInProvider } from '@flashcards/core';
import { ILoginInput } from '../../input/ILoginInput';
import { ILoginAuthentication } from '../../service/ILoginAuthentication';
import { ISetUserOutput } from '../../output/ISetUserOutput';

class Login implements ILoginInput {
  userAuthentication: ILoginAuthentication;
  userPresenter: ISetUserOutput;

  constructor(userAuthentication: ILoginAuthentication, userPresenter: ISetUserOutput) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async loginWithProvider(provider: SignInProvider) {
    const user = await this.userAuthentication.loginWithProvider(provider);

    this.userPresenter.setUser(user);
  }
}

export { Login };
