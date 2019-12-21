import * as React from 'react';
import { UserController, TopicController } from '@flashcards/controllers';
import { IUserPresenterHook } from '../implementations/presenters/UserPresenter';
import { ITopicsPresenterHook } from '../implementations/presenters/TopicsPresenter';

class AppContext {
  _userPresenter: IUserPresenterHook;
  _topicsPresenter: ITopicsPresenterHook;
  _userController: UserController;
  _topicController: TopicController;

  constructor(
    userPresenter: IUserPresenterHook,
    topicsPresenter: ITopicsPresenterHook,
    userController: UserController,
    topicController: TopicController,
  ) {
    this._userController = userController;
    this._topicController = topicController;
    this._userPresenter = userPresenter;
    this._topicsPresenter = topicsPresenter;
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
