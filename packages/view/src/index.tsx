import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from './contexts/AppContext';

import { Service } from '@flashcards/application';

type InitArgs = {
  topicRepository: Service.ITopicRepositoryService;
  userService: Service.IUserService;
  domElement: HTMLElement;
};

function init({ topicRepository, userService, domElement }: InitArgs): void {
  ReactDOM.render(
    <AppProvider
      value={{
        topicRepository,
        userService,
      }}
    >
      <App />
    </AppProvider>,
    domElement,
  );

  serviceWorker.unregister();
}

export { InitArgs };
export default init;
