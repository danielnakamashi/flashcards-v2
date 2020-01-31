import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { RouteComponentProps } from '@reach/router';
import { User } from '@flashcards/core';
import { ViewModel, Presenter } from '@flashcards/view';
import { UseCase } from '@flashcards/application';
import TopicsList from '../../components/TopicsList';
import Header from '../../components/Header';
import NewTopicForm from '../../components/NewTopicForm';
import { useStyles } from './TopicsPage.style';
import { getTopicRepository } from '../../store';

type Props = RouteComponentProps & {
  user: User;
  logout: () => void;
};

const topicsPagePresenter = new Presenter.TopicsPagePresenter();
const useViewModel = (): ViewModel.ITopicsPageViewModel => {
  const topicRepository = getTopicRepository();
  const addTopicUseCase = new UseCase.AddTopic(topicRepository, topicsPagePresenter);
  const removeTopicUseCase = new UseCase.RemoveTopic(topicRepository, topicsPagePresenter);
  const showTopicsUseCase = new UseCase.ShowTopics(topicRepository, topicsPagePresenter);
  const viewModel = ViewModel.TopicsPageViewModel(
    topicsPagePresenter,
    addTopicUseCase,
    removeTopicUseCase,
    showTopicsUseCase,
  );

  return viewModel;
};

const TopicsPage: React.FC<Props> = ({ user, logout }) => {
  const { useTopics, showTopicsByUser, addTopic, removeTopic } = useViewModel();
  const topics = useTopics();
  const classes = useStyles();

  useEffect(() => {
    showTopicsByUser(user.uid);
  });

  return (
    <>
      <Header user={user} logout={logout} />
      <Grid container direction="column" className={classes.container}>
        <Grid item>
          <NewTopicForm onTopicAdded={async fields => await addTopic(fields, user.uid)} />
        </Grid>
        <Grid item className={classes.gridList}>
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
