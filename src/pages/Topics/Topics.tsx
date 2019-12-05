import React from 'react';
import Grid from '@material-ui/core/Grid';
import TopicsList from 'components/TopicsList';
import Header from 'components/Header';
import { Topic } from '../../core/entities/Topic';

interface TopicsProps {
  items?: Topic[];
  onTopicRemoved: (index: number) => void;
}

const Topics: React.FC<TopicsProps> = ({ items = [], onTopicRemoved }) => {
  return (
    <>
      <Header />
      <Grid container direction="column">
        <Grid item>{/* <NewTopicForm onTopicAdded={handleTopicAdded} /> */}</Grid>
        <Grid item>
          <TopicsList items={items} onItemRemoved={onTopicRemoved} />
        </Grid>
      </Grid>
    </>
  );
};

export default Topics;
