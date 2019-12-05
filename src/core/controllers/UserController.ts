import { GetUser } from '../use-cases/GetUser';
import { Logout } from '../use-cases/Logout';

class UserController {
  getUserUseCase: GetUser;
  logoutUseCase: Logout;

  constructor(getUser: GetUser, logoutUseCase: Logout) {
    this.getUserUseCase = getUser;
    this.logoutUseCase = logoutUseCase;
  }

  getUser() {
    this.getUserUseCase.get();
  }

  logout() {
    this.logoutUseCase.logout();
  }
}

export { UserController };
