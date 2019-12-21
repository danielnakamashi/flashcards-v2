import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import { Topic } from '@flashcards/entities';
import { TopicCard } from '../TopicCard';

interface TopicsListProps {
  items: Topic[];
  onItemRemoved: (id: string) => void;
}

const TopicsList: React.FC<TopicsListProps> = ({ items, onItemRemoved }) => {
  const handleRemoveClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const button = event.target as HTMLButtonElement;
      const { id } = button.dataset;

      if (id) {
        onItemRemoved(id);
      }
    },
    [onItemRemoved],
  );

  return (
    <Grid container data-testid="topics-list">
      {items.map(item => (
        <Grid item xs={12} md={6} lg={3} key={item.id} data-testid="topicsListItem">
          <TopicCard name={item.name}>
            <button onClick={handleRemoveClick} data-id={item.id}>
              Remove
            </button>
          </TopicCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopicsList;
