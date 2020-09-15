import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import Grid from '@material-ui/core/Grid';
import { User } from '@flashcards/core';
import { ViewModel, Presenter } from '@flashcards/presentation';
import { UseCase, Service } from '@flashcards/application';
import TopicsList from '../../components/TopicsList';
import Header from '../../components/Header';
import NewTopicForm from '../../components/NewTopicForm';
import { useStyles } from './TopicsPage.style';
import { useServices } from '../../contexts/AppContext';

type Props = {
  user: User;
  logout: () => void;
};

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

const TopicsPage: React.FC<Props> = ({ user, logout }) => {
  const { topicRepository } = useServices();

  if (!topicRepository) {
    return null;
  }

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

export default TopicsPage;
