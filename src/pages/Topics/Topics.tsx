import React, { useEffect, useCallback } from 'react';
import { useStore } from 'effector-react';
import Grid from '@material-ui/core/Grid';
import TopicsList from 'components/TopicsList';
import Header from 'components/Header';
import NewTopicForm from 'components/NewTopicForm';
import { userStore, userController, topicController, topicsStore } from '../../instances';

function addTopic(name: string): void {
  topicController.addTopic({ name });
}

const Topics: React.FC = () => {
  const user = useStore(userStore);
  const topics = useStore(topicsStore);

  useEffect(() => {
    userController.getUser();

    if (user) {
      topicController.showTopics(user.uid);
    }
  }, [user]);

  return (
    <>
      <Header />
      <Grid container direction="column">
        <Grid item>
          <NewTopicForm onTopicAdded={addTopic} />
        </Grid>
        <Grid item>
          <TopicsList items={topics} onItemRemoved={() => {}} />
        </Grid>
      </Grid>
    </>
  );
};

export default Topics;
