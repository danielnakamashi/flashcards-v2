import React from 'react';
import Button from '@material-ui/core/Button';
import { SignInProvider } from '@flashcards/core';
import { useInstances } from '../../contexts/AppContext';

const Login: React.FC = () => {
  const { userController } = useInstances();

  return (
    <>
      {Object.keys(SignInProvider).map(provider => (
        <Button
          key={provider}
          onClick={() => userController.loginWithProvider(provider as SignInProvider)}
        >
          {provider}
        </Button>
      ))}
    </>
  );
};

export default Login;
