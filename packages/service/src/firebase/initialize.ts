import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

function initialize() {
  let app: firebase.app.App; // = firebase.initializeApp(firebaseConfig);

  return function init(firebaseConfig: Object) {
    if (!app) {
      app = firebase.initializeApp(firebaseConfig);
    }

    return app;
  };
}

export default initialize();
