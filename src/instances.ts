import { GetUserImpl as GetUserInteractor } from './implementation/use-cases/GetUserImpl';
import { LogoutImpl as LogoutInteractor } from './implementation/use-cases/LogoutImpl';
import { LoginImpl as LoginInteractor } from './implementation/use-cases/LoginImpl';
import { UserController } from './core/controllers/UserController';
import { userPersistenceFirebase } from './implementation/services/UserPersistenceFirebase';
import { userStore, userPresenter } from './implementation/presenters/UserPresenterImpl';

import { TopicPersistenceImpl } from './implementation/services/TopicPersistenceMemory';
import { ShowTopicsImpl as ShowTopicsInteractor } from './implementation/use-cases/ShowTopicsImpl';
import { AddTopicImpl as AddTopicInteractor } from './implementation/use-cases/AddTopicImpl';
import { RemoveTopicImpl as RemoveTopicInteractor } from './implementation/use-cases/RemoveTopicImpl';
import { TopicController } from './core/controllers/TopicController';
import { topicsStore, topicsPresenter } from './implementation/presenters/TopicsPresenterImpl';

const getUserInteractor = new GetUserInteractor(userPersistenceFirebase, userPresenter);
const logoutInteractor = new LogoutInteractor(userPersistenceFirebase, userPresenter);
const loginFirebase = new LoginInteractor(userPersistenceFirebase, userPresenter);
const userController = new UserController(getUserInteractor, logoutInteractor, loginFirebase);

const topicPersistence = new TopicPersistenceImpl();
const showTopicsInteractor = new ShowTopicsInteractor(topicPersistence, topicsPresenter);
const addTopicInteractor = new AddTopicInteractor(topicPersistence, topicsPresenter);
const removeTopicInteractor = new RemoveTopicInteractor(topicPersistence);
const topicController = new TopicController(showTopicsInteractor, addTopicInteractor, removeTopicInteractor);

export { userController, userStore, topicController, topicsStore };
