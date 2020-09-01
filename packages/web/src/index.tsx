import React from 'react';
import ReactDOM from 'react-dom';
import { TopicRepositoryFirestore, UserAuthenticationFirebase } from '@flashcards/service';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from './contexts/AppContext';
import firebaseConfig from './config/firebase';

const topicRepository = new TopicRepositoryFirestore(firebaseConfig);
const userService = new UserAuthenticationFirebase(firebaseConfig);

ReactDOM.render(
  <AppProvider
    value={{
      topicRepository,
      userService,
    }}
  >
    <App />
  </AppProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
