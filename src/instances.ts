import { GetUserImpl as GetUserInteractor } from './core/use-cases/GetUserImpl';
import { LogoutImpl as LogoutInteractor } from './core/use-cases/LogoutImpl';
import { UserController } from './core/controllers/UserController';
import { userPersistenceFirebase } from './core/services/UserPersistenceFirebase';
import { userStore, userPresenter } from './core/presenters/UserPresenterImpl';

const getUserInteractor = new GetUserInteractor(userPersistenceFirebase, userPresenter);
const logoutInteractor = new LogoutInteractor(userPersistenceFirebase, userPresenter);
const userController = new UserController(getUserInteractor, logoutInteractor);

export { userController, userStore };
