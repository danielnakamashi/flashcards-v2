import React from 'react';
import Topics from './pages/Topics';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Topics />
    </>
  );
};

export default App;
