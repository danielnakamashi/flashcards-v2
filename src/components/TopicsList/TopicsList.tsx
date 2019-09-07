import React from 'react';
import Grid from '@material-ui/core/Grid';

interface TopicsListProps {
  items: string[];
  onItemRemoved: (index: number) => void;
}

const TopicsList: React.FC<TopicsListProps> = ({ items, onItemRemoved }) => {
  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = event.target as HTMLButtonElement;
    const { index } = button.dataset;

    if (index) {
      onItemRemoved(parseInt(index, 10));
    }
  };

  return (
    <Grid container>
      {items.map((item, index) => (
        <Grid item xs={12} md={6} lg={3} key={item} data-testid="topicsListItem">
          {item}
          <button onClick={handleRemoveClick} data-index={index}>
            Remove
          </button>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopicsList;
