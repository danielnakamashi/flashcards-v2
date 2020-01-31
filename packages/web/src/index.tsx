import React from 'react';
import ReactDOM from 'react-dom';
import { TopicRepositoryFirestore, UserAuthenticationFirebase } from '@flashcards/service';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setTopicRepository, setUserService } from './store';

setTopicRepository(new TopicRepositoryFirestore());
setUserService(new UserAuthenticationFirebase());

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
