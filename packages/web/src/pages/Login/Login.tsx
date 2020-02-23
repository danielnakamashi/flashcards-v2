import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { SignInProvider } from '@flashcards/core';
import { Presenter } from '@flashcards/view';
import * as LoginViewModel from '@flashcards/view/src/view-model/LoginViewModel';
import { UseCase } from '@flashcards/application';
import { appContext } from '../../contexts/AppContext';

const useViewModel = (loginPresenter: Presenter.ILoginPresenter) => {
  const { userService } = useContext(appContext);
  const loginUseCase = new UseCase.Login(userService, loginPresenter);
  LoginViewModel.default(loginPresenter, loginUseCase);
  return LoginViewModel;
};

const Login: React.FC<{ loginPresenter: Presenter.ILoginPresenter }> = ({ loginPresenter }) => {
  const { loginWithProvider } = useViewModel(loginPresenter);
  return (
    <>
      {Object.keys(SignInProvider).map(provider => (
        <Button key={provider} onClick={() => loginWithProvider(provider as SignInProvider)}>
          {provider}
        </Button>
      ))}
    </>
  );
};

export default Login;
