import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import { Topic } from '@flashcards/core';
import { TopicCard } from '../TopicCard';

interface TopicsListProps {
  items: Topic[];
  onItemRemoved: (id: string) => void;
}

const TopicsList: React.FC<TopicsListProps> = ({ items, onItemRemoved }) => {
  const handleRemoveClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const button = event.currentTarget as HTMLButtonElement;
      const { id } = button.dataset;

      if (id) {
        onItemRemoved(id);
      }
    },
    [onItemRemoved],
  );

  return (
    <Grid container spacing={2} data-testid="topics-list">
      {items
        .filter(item => item.id)
        .map((item: Topic) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} data-testid="topicsListItem">
            <TopicCard onRemove={handleRemoveClick} topicId={item.id!}>
              {item.name}
            </TopicCard>
          </Grid>
        ))}
    </Grid>
  );
};

export default TopicsList;
