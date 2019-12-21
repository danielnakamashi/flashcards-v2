import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Topic } from '@flashcards/entities';
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
      {items.map(item => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} data-testid="topicsListItem">
          <TopicCard name={item.name}>
            <IconButton
              color="secondary"
              onClick={handleRemoveClick}
              data-id={item.id}
              aria-label="delete"
            >
              <DeleteIcon fontSize="large" />
            </IconButton>
          </TopicCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopicsList;
