import { ILogoutInput } from '../../input';
import { ILogoutService } from '../../service';
import { ISetUserOutput } from '../../output';

class LogoutUseCase implements ILogoutInput {
  userAuthentication: ILogoutService;
  userPresenter: ISetUserOutput;

  constructor(userAuthentication: ILogoutService, userPresenter: ISetUserOutput) {
    this.userAuthentication = userAuthentication;
    this.userPresenter = userPresenter;
  }

  async logout() {
    await this.userAuthentication.logout();
    this.userPresenter.setUser(null);
  }
}

export { LogoutUseCase };
