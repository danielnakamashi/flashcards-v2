import React from 'react';
import Authentication, { UserContext } from './containers/Authentication';
import Topics from './pages/Topics';
import Login from './pages/Login';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import firebase from './firebase';

const Providers: React.FC = () => (
  <Authentication
    onAuthStateChanged={setter => firebase.auth().onAuthStateChanged(setter)}
    signOut={() => firebase.auth().signOut()}
  >
    <App />
  </Authentication>
);

const App: React.FC = () => {
  const { user } = React.useContext(UserContext);

  return (
    <>
      <CssBaseline />
      {user ? <Topics /> : <Login />}
    </>
  );
};

export default Providers;
