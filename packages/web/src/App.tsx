import React, { useEffect, useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from '@reach/router';
import { UseCase } from '@flashcards/application';
import { ViewModel, Presenter } from '@flashcards/view';
import Login from './pages/Login';
import TopicsPage from './pages/TopicsPage';
import TopicPage from './pages/TopicPage';
import { appContext } from './contexts/AppContext';
import 'typeface-roboto';
import { IUserService } from '@flashcards/application/src/service';

const appPresenterInstance = new Presenter.AppPresenter();
const useViewModel = (userService: IUserService): ViewModel.AppViewModel.IAppViewModel => {
  const getUserUseCaseApp = new UseCase.GetUser(userService, appPresenterInstance);
  const logoutUseCaseApp = new UseCase.Logout(userService, appPresenterInstance);
  ViewModel.AppViewModel.default(appPresenterInstance, getUserUseCaseApp, logoutUseCaseApp);

  return ViewModel.AppViewModel;
};

const App: React.FC = () => {
  const { userService } = useContext(appContext);

  if (!userService) {
    return null;
  }

  const { useUser, getCurrentUser, logout } = useViewModel(userService);
  const user = useUser();

  useEffect(() => {
    getCurrentUser();
  });

  return (
    <>
      <CssBaseline />
      {user ? (
        <Router>
          <TopicsPage path="/" user={user} logout={() => logout()} />
          <TopicPage path="/:topicId" user={user} logout={() => logout()} />
        </Router>
      ) : (
        <Login loginPresenter={appPresenterInstance} />
      )}
    </>
  );
};

export default App;
