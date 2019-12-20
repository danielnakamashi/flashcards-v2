import { UserController, TopicController } from '@flashcards/controllers';
import { IUserPresenter, ITopicsPresenter } from '@flashcards/presenters';
import { IGetUser, ILogout, ILogin } from '@flashcards/use-cases';

class Instances {
  _userPresenter: IUserPresenter;
  _topicsPresenter: ITopicsPresenter;
  _userController: IGetUser & ILogout & ILogin;
  _topicController: TopicController;

  constructor(
    userPresenter: IUserPresenter,
    topicsPresenter: ITopicsPresenter,
    userController: UserController,
    topicController: TopicController,
  ) {
    this._userPresenter = userPresenter;
    this._topicsPresenter = topicsPresenter;
    this._userController = userController;
    this._topicController = topicController;
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

export { Instances };