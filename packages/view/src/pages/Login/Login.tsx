import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { SignInProvider } from '@flashcards/core';
import { Presenter } from '@flashcards/presentation';
import { ViewModel } from '@flashcards/presentation';
import { UseCase, Service } from '@flashcards/application';
import { appContext } from '../../contexts/AppContext';

const useViewModel = (
  loginPresenter: Presenter.ILoginPresenter,
  userService: Service.IUserService,
) => {
  const loginUseCase = new UseCase.LoginUseCase(userService, loginPresenter);

  return ViewModel.loginViewModel(loginPresenter, loginUseCase);
};

const Login: React.FC<{ loginPresenter: Presenter.ILoginPresenter }> = ({ loginPresenter }) => {
  const { userService } = useContext(appContext);

  if (!userService) {
    return null;
  }

  const { loginWithProvider } = useViewModel(loginPresenter, userService);
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
