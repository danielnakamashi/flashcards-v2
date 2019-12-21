import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TopicsList from '../../components/TopicsList';
import Header from '../../components/Header';
import NewTopicForm from '../../components/NewTopicForm';
import { useInstances } from '../../contexts/AppContext';
import { useStyles } from './TopicsPage.style';

const TopicsPage: React.FC = () => {
  const { userPresenter, topicsPresenter, userController, topicController } = useInstances();
  const user = userPresenter.useUser();
  const topics = topicsPresenter.useTopics();
  const classes = useStyles();

  useEffect(() => {
    userController.getUser();

    if (user) {
      topicController.showTopics(user.uid);
    }
  }, [topicController, user, userController]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Header />
      <Grid container direction="column" className={classes.container}>
        <Grid item>
          <NewTopicForm
            onTopicAdded={async fields => await topicController.addTopic(fields, user.uid)}
          />
        </Grid>
        <Grid item className={classes.gridList}>
          <TopicsList
            items={topics}
            onItemRemoved={(topicId: string) => {
              topicController.removeTopic({ uid: user.uid, topicId });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TopicsPage;
