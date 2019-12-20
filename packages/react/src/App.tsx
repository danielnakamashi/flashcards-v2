import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopicsPage from './pages/TopicsPage';
import Login from './pages/Login';
import { useInstances } from './contexts/AppContext';

import 'typeface-roboto';

const App: React.FC = () => {
  const { userPresenter, userController } = useInstances();
  const user = userPresenter.useUser();

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
