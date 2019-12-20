import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TopicsList from '../../components/TopicsList';
import Header from '../../components/Header';
import NewTopicForm from '../../components/NewTopicForm';
import { useInstances } from '../../contexts/AppContext';

const TopicsPage: React.FC = () => {
  const { userPresenter, topicsPresenter, userController, topicController } = useInstances();
  const user = userPresenter.useUser();
  const topics = topicsPresenter.useTopics();

  useEffect(() => {
    userController.getUser();

    if (user) {
      topicController.showTopics(user.uid);
    }
  }, [topicController, user, userController]);

  return (
    <>
      <Header />
      <Grid container direction="column">
        <Grid item>
          <NewTopicForm onTopicAdded={topicController.addTopic} />
        </Grid>
        <Grid item>
          <TopicsList items={topics} onItemRemoved={() => {}} />
        </Grid>
      </Grid>
    </>
  );
};

export default TopicsPage;
