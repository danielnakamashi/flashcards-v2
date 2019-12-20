import React from 'react';
import Grid from '@material-ui/core/Grid';
import TopicsList from '../../components/TopicsList';
import Header from '../../components/Header';
import NewTopicForm from '../../components/NewTopicForm';
import { TopicsPageProps, withTopicsPageContainer } from './withTopicsPageContainer';

const TopicsPage: React.FC<TopicsPageProps> = ({ topics, addTopic }) => {
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

export default withTopicsPageContainer(TopicsPage);

export { TopicsPage };
