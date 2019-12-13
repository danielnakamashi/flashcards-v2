import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStore } from 'effector-react';
import Topics from 'pages/Topics';
import Login from 'pages/Login';
import { userStore, userController } from './instances';

import 'typeface-roboto';

const App: React.FC = () => {
  const user = useStore(userStore);
  useEffect(() => {
    userController.getUser();
  });

  return (
    <>
      <CssBaseline />
      {user ? <Topics /> : <Login />}
    </>
  );
};

export default App;
