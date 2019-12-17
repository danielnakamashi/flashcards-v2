import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStore } from 'effector-react';
import TopicsPage from './pages/TopicsPage';
import Login from './pages/Login';
import { userStore, userController } from '@flashcards/implementation';

import 'typeface-roboto';

const App: React.FC = () => {
  const user = useStore(userStore);

  useEffect(() => {
    userController.getUser();
  });

  return (
    <>
      <CssBaseline />
      {user ? <TopicsPage /> : <Login />}
    </>
  );
};

export default App;
