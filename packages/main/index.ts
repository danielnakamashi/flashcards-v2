import { TopicRepositoryFirestore, UserAuthenticationFirebase } from '@flashcards/service';
import init from '@flashcards/view';
import firebaseConfig from './config/firebase';

init({
  topicRepository: new TopicRepositoryFirestore(firebaseConfig),
  userService: new UserAuthenticationFirebase(firebaseConfig),
  domElement: document.getElementById('root') as HTMLElement,
});
