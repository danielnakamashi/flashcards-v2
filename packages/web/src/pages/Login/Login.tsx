import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { SignInProvider } from '@flashcards/core';
import { Presenter } from '@flashcards/presentation';
import { ViewModel } from '@flashcards/presentation';
import { UseCase, Service } from '@flashcards/application';
import { appContext } from '../../contexts/AppContext';

const useViewModel = (userService: Service.IUserService) => {
  const loginPresenter = new Presenter.AppPresenter();
  const loginUseCase = new UseCase.LoginUseCase(userService, loginPresenter);

  return ViewModel.loginViewModel(loginPresenter, loginUseCase);
};

const Login: React.FC = () => {
  const { userService } = useContext(appContext);

  if (!userService) {
    return null;
  }

  const { loginWithProvider } = useViewModel(userService);
  return (
    <>
      {Object.keys(SignInProvider).map((provider) => (
        <Button key={provider} onClick={() => loginWithProvider(provider as SignInProvider)}>
          {provider}
        </Button>
      ))}
    </>
  );
};

export default Login;
