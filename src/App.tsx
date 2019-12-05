import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStore } from 'effector-react';
import Loading from 'pages/Loading';
import Topics from 'pages/Topics';
import Login from 'pages/Login';
import { userStore, userController } from './instances';

import 'typeface-roboto';

const App: React.FC = () => {
  const user = useStore(userStore);
  useEffect(() => {
    userController.getUser();
  });
  console.log(user);

  return (
    <>
      <CssBaseline />
      {user ? <Topics onTopicRemoved={(index: number) => null} /> : <Login />}
    </>
  );
};

export default App;
