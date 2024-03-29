import React, { useEffect, Suspense } from 'react';
import { useStore } from 'effector-react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import { UseCase } from '@flashcards/application';
import { ViewModel, Presenter } from '@flashcards/presentation';
import { IUserService } from '@flashcards/application/src/service';
import { useServices } from './contexts/appContext';
import { UserProvider } from './contexts/userContext';
import { routes } from './routes';

import 'typeface-roboto';

const TopicsPage = React.lazy(
  () => import(/* webpackChunkName: "TopicsPage" */ './pages/TopicsPage'),
);
const TopicPage = React.lazy(() => import(/* webpackChunkName: "TopicPage" */ './pages/TopicPage'));
const Login = React.lazy(() => import(/* webpackChunkName: "Login" */ './pages/Login'));
const TopicStudyPage = React.lazy(
  () => import(/* webpackChunkName: "TopicStudyPage" */ './pages/TopicStudyPage'),
);

const useViewModel = (userService: IUserService): ViewModel.IAppViewModel => {
  return React.useMemo(() => {
    const appPresenterInstance = new Presenter.AppPresenter();
    const getUserUseCaseApp = new UseCase.GetUser(userService, appPresenterInstance);
    const logoutUseCaseApp = new UseCase.LogoutUseCase(userService, appPresenterInstance);

    return ViewModel.appViewModel(appPresenterInstance, getUserUseCaseApp, logoutUseCaseApp);
  }, [userService]);
};

const App: React.FC = () => {
  const { userService } = useServices();
  const { getUserStore, getCurrentUser, logout } = useViewModel(userService);
  const user = useStore(getUserStore());

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CssBaseline />
      {user ? (
        <UserProvider value={{ user, logout }}>
          <Switch>
            <Route exact path={routes.home()}>
              <TopicsPage />
            </Route>
            <Route path={routes.topic()} exact>
              <TopicPage />
            </Route>
            <Route path={routes.topicStudy()}>
              <TopicStudyPage />
            </Route>
          </Switch>
        </UserProvider>
      ) : (
        <Login />
      )}
    </Suspense>
  );
};

export default App;
