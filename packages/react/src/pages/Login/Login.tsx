import React from 'react';
import Button from '@material-ui/core/Button';
import { Enums as EntitiesEnum } from '@flashcards/entities';
import { useInstances } from '../../contexts/AppContext';

const Login: React.FC = () => {
  const { userController } = useInstances();

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
