import React, { useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { RouteComponentProps } from '@reach/router';
import { User } from '@flashcards/core';
import { ViewModel, Presenter } from '@flashcards/view';
import { UseCase, Service } from '@flashcards/application';
import TopicsList from '../../components/TopicsList';
import Header from '../../components/Header';
import NewTopicForm from '../../components/NewTopicForm';
import { useStyles } from './TopicsPage.style';
import { appContext } from '../../contexts/AppContext';

type Props = RouteComponentProps & {
  user: User;
  logout: () => void;
};

const topicsPagePresenter = new Presenter.TopicsPagePresenter();
const useViewModel = (
  topicRepository: Service.ITopicRepository,
): ViewModel.ITopicsPageViewModel => {
  const addTopicUseCase = new UseCase.AddTopic(topicRepository, topicsPagePresenter);
  const removeTopicUseCase = new UseCase.RemoveTopic(topicRepository, topicsPagePresenter);
  const showTopicsUseCase = new UseCase.ShowTopics(topicRepository, topicsPagePresenter);
  const viewModel = ViewModel.createTopicsPageViewModel(
    topicsPagePresenter,
    addTopicUseCase,
    removeTopicUseCase,
    showTopicsUseCase,
  );

  return viewModel;
};

const TopicsPage: React.FC<Props> = ({ user, logout }) => {
  const { topicRepository } = useContext(appContext);

  if (!topicRepository) {
    return null;
  }

  const { useTopics, showTopicsByUser, addTopic, removeTopic } = useViewModel(topicRepository);
  const topics = useTopics();
  const classes = useStyles();

  useEffect(() => {
    showTopicsByUser(user.uid);
  }, [user]);

  return (
    <>
      <Header user={user} logout={logout} />
      <Grid container direction="column" className={classes.container}>
        <NewTopicForm onTopicAdded={async fields => await addTopic(fields, user.uid)} />
        <TopicsList
          items={topics}
          onItemRemoved={(topicId: string) => {
            removeTopic(user.uid, topicId);
          }}
        />
      </Grid>
    </>
  );
};

export default TopicsPage;
