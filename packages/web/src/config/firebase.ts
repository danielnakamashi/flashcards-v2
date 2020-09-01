import { FirebaseConfig } from '@flashcards/service';

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY as string,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID ?? ''}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID ?? ''}.firebaseio.com`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID as string,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID ?? ''}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID as string,
  appId: process.env.REACT_APP_FIREBASE_APP_ID as string,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID as string,
};

export default firebaseConfig;
