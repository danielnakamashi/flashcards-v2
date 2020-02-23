import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/es/Grid';
import { User } from '@flashcards/core';
import { ViewModel, Presenter } from '@flashcards/view';
import { UseCase } from '@flashcards/application';
import Header from '../../components/Header';
import { appContext } from '../../contexts/AppContext';
import { useStyles } from './TopicPage.style';

interface Props extends RouteComponentProps<{ topicId: string }> {
  user: User;
  logout: () => void;
}

const topicPagePresenter = new Presenter.TopicPagePresenter();
const useViewModel = (): ViewModel.ITopicPageViewModel => {
  const { topicRepository } = useContext(appContext);
  const showTopic = new UseCase.ShowTopic(topicRepository, topicPagePresenter);

  return ViewModel.createTopicPageViewModel(topicPagePresenter, showTopic);
};

const TopicPage: React.FC<Props> = ({ user, logout, topicId }) => {
  if (topicId === undefined) {
    return null;
  }

  const styles = useStyles();
  const { useTopicName, showTopic } = useViewModel();
  const topicName = useTopicName();

  useEffect(() => {
    showTopic(user.uid, topicId);
  }, [user, topicId]);

  return (
    <>
      <Header user={user} logout={logout} />
      <main data-testid="topic-page">
        <Typography variant="h1" className={styles.title}>
          {topicName}
        </Typography>
        <Grid item direction="column" className={styles.list}></Grid>
      </main>
    </>
  );
};

export default TopicPage;
