import React, { useEffect, useContext } from 'react';
import { useStore } from 'effector-react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import { UseCase } from '@flashcards/application';
import { ViewModel, Presenter } from '@flashcards/presentation';
import Login from './pages/Login';
import TopicsPage from './pages/TopicsPage';
import TopicPage from './pages/TopicPage';
import { appContext } from './contexts/AppContext';
import 'typeface-roboto';
import { IUserService } from '@flashcards/application/src/service';

const appPresenterInstance = new Presenter.AppPresenter();
const useViewModel = (userService: IUserService): ViewModel.IAppViewModel => {
  const getUserUseCaseApp = new UseCase.GetUser(userService, appPresenterInstance);
  const logoutUseCaseApp = new UseCase.LogoutUseCase(userService, appPresenterInstance);

  return ViewModel.appViewModel(appPresenterInstance, getUserUseCaseApp, logoutUseCaseApp);
};

const App: React.FC = () => {
  const { userService } = useContext(appContext);

  if (!userService) {
    return null;
  }

  const { getUserStore, getCurrentUser, logout } = useViewModel(userService);
  const user = useStore(getUserStore());

  useEffect(() => {
    getCurrentUser();
  });

  return (
    <>
      <CssBaseline />
      {user ? (
        <Switch>
          <Route path="/">
            <TopicsPage user={user} logout={() => logout()} />
          </Route>
          <Route path="/:topicId">
            <TopicPage user={user} logout={() => logout()} />
          </Route>
        </Switch>
      ) : (
        <Login loginPresenter={appPresenterInstance} />
      )}
    </>
  );
};

export default App;
