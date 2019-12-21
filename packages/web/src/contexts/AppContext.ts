import * as React from 'react';
import { UserController, TopicController } from '@flashcards/controllers';
import { IUserPresenter, ITopicsPresenter } from '@flashcards/presenters';
import { IGetUser, ILogout, ILogin } from '@flashcards/use-cases';
import { IUserPresenterHook, UserPresenterHook } from '../presenters/UserPresenterHook';
import { ITopicsPresenterHook, TopicsPresenterHook } from '../presenters/TopicsPresenterHook';

class AppContext {
  _userPresenter: IUserPresenterHook;
  _topicsPresenter: ITopicsPresenterHook;
  _userController: IGetUser & ILogout & ILogin;
  _topicController: TopicController;

  constructor(
    userPresenter: IUserPresenter,
    topicsPresenter: ITopicsPresenter,
    userController: UserController,
    topicController: TopicController,
  ) {
    this._userController = userController;
    this._topicController = topicController;
    this._userPresenter = new UserPresenterHook(userPresenter);
    this._topicsPresenter = new TopicsPresenterHook(topicsPresenter);
  }

  get userPresenter() {
    return this._userPresenter;
  }

  get userController() {
    return this._userController;
  }

  get topicsPresenter() {
    return this._topicsPresenter;
  }

  get topicController() {
    return this._topicController;
  }
}

const appContext = React.createContext<AppContext | null>(null);
const AppProvider = appContext.Provider;
const useInstances = () => {
  const instance = React.useContext(appContext);

  if (!instance) {
    throw new Error('Instance not set');
  }

  return instance;
};

export { AppContext, AppProvider, useInstances };
