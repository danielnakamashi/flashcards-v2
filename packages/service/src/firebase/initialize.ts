import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

function initialize() {
  let app: firebase.app.App;

  return function init(firebaseConfig: FirebaseConfig) {
    if (!app) {
      app = firebase.initializeApp(firebaseConfig);
    }

    return app;
  };
}

export default initialize();
