import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import { TopicRepositoryFirestore, UserAuthenticationFirebase } from '@flashcards/service';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from './contexts/appContext';
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
    <RouterProvider>
      <App />
    </RouterProvider>
  </AppProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
