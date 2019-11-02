import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from 'config/firebase-config';

firebase.initializeApp(firebaseConfig);

export const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export default firebase;
