import React from 'react';
import ReactDOM from 'react-dom';
import { TopicRepositoryLocalStorage, UserAuthenticationFirebase } from '@flashcards/service';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from './contexts/AppContext';

ReactDOM.render(
  <AppProvider
    value={{
      topicRepository: new TopicRepositoryLocalStorage(),
      userService: new UserAuthenticationFirebase(),
    }}
  >
    <App />
  </AppProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
