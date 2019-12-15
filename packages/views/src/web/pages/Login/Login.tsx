import React from 'react';
import Button from '@material-ui/core/Button';
import { Enums as EntitiesEnum } from '@flashcards/entities';
import { userController } from '@flashcards/implementation';

const Login: React.FC = () => {
  return (
    <>
      {Object.keys(EntitiesEnum.SignInProvider).map(provider => (
        <Button
          key={provider}
          onClick={() => userController.loginWithProvider(provider as EntitiesEnum.SignInProvider)}
        >
          {provider}
        </Button>
      ))}
    </>
  );
};

export default Login;
