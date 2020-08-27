import { SignInProvider } from '@flashcards/core';
import { ILoginInput } from '../../input';
import { ILoginService } from '../../service';
import { ISetUserOutput } from '../../output';

class LoginUseCase implements ILoginInput {
  userAuthentication: ILoginService;
  userPresenter: ISetUserOutput;

  constructor(userAuthentication: ILoginService, userPresenter: ISetUserOutput) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async loginWithProvider(provider: SignInProvider): Promise<void> {
    const user = await this.userAuthentication.loginWithProvider(provider);

    this.userPresenter.setUser(user);
  }
}

export { LoginUseCase };
