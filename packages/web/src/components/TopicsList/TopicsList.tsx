import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Topic } from '@flashcards/core';
import { TopicCard } from '../TopicCard';

interface TopicsListProps {
  items: Topic[];
  onItemRemoved: (id: string) => void;
}

const TopicsList: React.FC<TopicsListProps> = ({ items, onItemRemoved }) => {
  return (
    <Grid container spacing={2} data-testid="topics-list">
      {items
        .filter(item => item.id)
        .map((item: Topic) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} data-testid="topicsListItem">
            <TopicCard onRemove={onItemRemoved} topicId={item.id}>
              {item.name}
            </TopicCard>
          </Grid>
        ))}
    </Grid>
  );
};

export default TopicsList;
