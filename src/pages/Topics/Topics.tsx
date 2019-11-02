import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import NewTopicForm from 'components/NewTopicForm';
import TopicsList from 'components/TopicsList';
import Header from 'components/Header';

interface TopicsProps {
  items?: string[];
}

const Topics: React.FC<TopicsProps> = ({ items = [] }) => {
  const [topics, setTopics] = useState(items);

  const handleTopicAdded = (topic: string) => {
    setTopics(topics => [topic, ...topics]);
  };

  const handleRemoveItem = (index: number) => {
    setTopics(topics => {
      let topicsMutable = [...topics];
      topicsMutable.splice(index, 1);

      return topicsMutable;
    });
  };

  return (
    <>
      <Header />
      <Grid container direction="column">
        <Grid item>
          <NewTopicForm onTopicAdded={handleTopicAdded} />
        </Grid>
        <Grid item>
          <TopicsList items={topics} onItemRemoved={handleRemoveItem} />
        </Grid>
      </Grid>
    </>
  );
};

export default Topics;
