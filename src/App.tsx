import React from 'react';
import Authentication from './containers/Authentication';
import Topics from './pages/Topics';
import Login from './pages/Login';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Authentication logged={Topics} unlogged={Login} />
    </>
  );
};

export default App;
