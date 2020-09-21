import React from 'react';
import Button from '@material-ui/core/Button';
import { SignInProvider } from '@flashcards/core';
import { Presenter } from '@flashcards/presentation';
import { ViewModel } from '@flashcards/presentation';
import { UseCase, Service } from '@flashcards/application';
import { useServices } from '../../contexts/appContext';

const useViewModel = (userService: Service.IUserService) => {
  const loginPresenter = new Presenter.AppPresenter();
  const loginUseCase = new UseCase.LoginUseCase(userService, loginPresenter);

  return ViewModel.loginViewModel(loginPresenter, loginUseCase);
};

const Login: React.FC = () => {
  const { userService } = useServices();
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
