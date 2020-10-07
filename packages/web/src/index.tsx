import React from 'react';
// import 'wdyr';
import ReactDOM from 'react-dom';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import { TopicRepositoryFirestore, UserAuthenticationFirebase } from '@flashcards/service';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from './contexts/appContext';
import firebaseConfig from './config/firebase';
import { ErrorBoundary } from './components/ErrorBoundary';

const topicRepository = new TopicRepositoryFirestore(firebaseConfig);
const userService = new UserAuthenticationFirebase(firebaseConfig);

try {
  ReactDOM.render(
    <React.StrictMode>
      <ErrorBoundary>
        <AppProvider
          value={{
            topicRepository,
            userService,
          }}
        >
          <RouterProvider>
            <App />
          </RouterProvider>
        </AppProvider>
      </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root'),
  );
} catch (error) {
  console.log('global error', error);
}

serviceWorker.unregister();
