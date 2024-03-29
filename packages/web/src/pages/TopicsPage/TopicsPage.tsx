import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import Grid from '@material-ui/core/Grid';
import { ViewModel, Presenter } from '@flashcards/presentation';
import { UseCase, Service } from '@flashcards/application';
import TopicsList from '../../components/TopicsList';
import Header from '../../components/Header';
import NewTopicForm from '../../components/NewTopicForm';
import { useServices } from '../../contexts/appContext';
import { useUserContext } from '../../contexts/userContext';
import { useStyles } from './TopicsPage.style';

const useViewModel = (topicRepository: Service.ITopicRepositoryService) =>
  React.useMemo(() => {
    const topicsPagePresenter = new Presenter.TopicsPagePresenter();
    const addTopicUseCase = new UseCase.AddTopicUseCase(topicRepository, topicsPagePresenter);
    const removeTopicUseCase = new UseCase.RemoveTopicUseCase(topicRepository, topicsPagePresenter);
    const showTopicsUseCase = new UseCase.ShowTopicsUseCase(topicRepository, topicsPagePresenter);
    return ViewModel.topicsPageViewModel(
      topicsPagePresenter,
      addTopicUseCase,
      removeTopicUseCase,
      showTopicsUseCase,
    );
  }, [topicRepository]);

const TopicsPage: React.FC = () => {
  const { topicRepository } = useServices();
  const { user, logout } = useUserContext();
  const { getTopicsStore, showTopicsByUser, addTopic, removeTopic } = useViewModel(topicRepository);
  const topics = useStore(getTopicsStore());
  const classes = useStyles();

  useEffect(() => {
    showTopicsByUser(user.uid);
  }, [user]);

  return (
    <>
      <Header user={user} logout={logout} />
      <Grid container direction="column" className={classes.container}>
        <Grid item>
          <NewTopicForm onTopicAdded={async (fields) => await addTopic(fields, user.uid)} />
        </Grid>
        <Grid item>
          <TopicsList
            items={topics}
            onItemRemoved={(topicId: string) => {
              removeTopic(user.uid, topicId);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

// TopicsPage.whyDidYouRender = true;

export default TopicsPage;
