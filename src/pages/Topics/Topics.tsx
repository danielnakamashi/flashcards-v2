import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import NewTopicForm from '../../components/NewTopicForm';
import TopicsList from '../../components/TopicsList';
import { UserInfo } from 'firebase';
import firebase from '../../firebase';

interface TopicsProps {
  items?: string[];
  user: UserInfo;
}

const Topics: React.FC<TopicsProps> = ({ items = [] }) => {
  firebase.auth().signOut();
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
    <Grid container direction="column">
      <Grid item>
        <NewTopicForm onTopicAdded={handleTopicAdded} />
      </Grid>
      <Grid item>
        <TopicsList items={topics} onItemRemoved={handleRemoveItem} />
      </Grid>
    </Grid>
  );
};

export default Topics;
