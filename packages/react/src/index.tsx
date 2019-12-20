import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserController, TopicController } from '@flashcards/controllers';
import { ITopicsPresenter, IUserPresenter } from '@flashcards/presenters';
import { AppProvider } from './contexts/AppContext';
import { Instances } from './instances';

export type InitParams = {
  rootElement: Element | null;
  userController: UserController;
  topicController: TopicController;
  userPresenter: IUserPresenter;
  topicsPresenter: ITopicsPresenter;
};

function init({
  rootElement,
  userController,
  topicController,
  userPresenter,
  topicsPresenter,
}: InitParams) {
  const instances = new Instances(userPresenter, topicsPresenter, userController, topicController);

  ReactDOM.render(
    <AppProvider value={instances}>
      <App />
    </AppProvider>,
    rootElement,
  );
}

export { init };
