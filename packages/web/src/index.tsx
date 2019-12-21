import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider, AppContext } from './contexts/AppContext';
import { userController, userPresenter, topicController, topicsPresenter } from './implementations';
import * as serviceWorker from './serviceWorker';

const instances = new AppContext(userPresenter, topicsPresenter, userController, topicController);

ReactDOM.render(
  <AppProvider value={instances}>
    <App />
  </AppProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
