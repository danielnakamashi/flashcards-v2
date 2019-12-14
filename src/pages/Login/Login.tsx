import React from 'react';
import Button from '@material-ui/core/Button';
import { SignInProvider } from 'core/entities/enums/signin-provider';
import { userController } from 'implementation';

const Login: React.FC = () => {
  return (
    <>
      {Object.keys(SignInProvider).map(provider => (
        <Button key={provider} onClick={() => userController.loginWithProvider(provider as SignInProvider)}>
          {provider}
        </Button>
      ))}
    </>
  );
};

export default Login;
