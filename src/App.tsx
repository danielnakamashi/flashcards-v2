import React from 'react';
import { useUserContext, UserProvider } from './containers/FirebaseUserContext';
import { AppProvider } from './containers/AppContext';
import Loading from './pages/Loading';
import Topics from './pages/Topics';
import Login from './pages/Login';
import CssBaseline from '@material-ui/core/CssBaseline';
import { UserContext } from 'types/user-context';
import { useAppContext } from './containers/AppContext';
import 'typeface-roboto';

const App: React.FC = () => {
  const { useUser } = useAppContext();
  const { user } = useUser() as UserContext;

  return (
    <>
      <CssBaseline />
      {user ? <Topics /> : <Login />}
    </>
  );
};

const Providers: React.FC = () => (
  <UserProvider loading={<Loading />}>
    <AppProvider useUser={useUserContext}>
      <App />
    </AppProvider>
  </UserProvider>
);

export default Providers;
