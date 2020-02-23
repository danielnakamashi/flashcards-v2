import React from 'react';
import { Topic } from '@flashcards/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { navigate } from '@reach/router';

interface TopicsListProps {
  items: Topic[];
  onItemRemoved: (id: string) => void;
}

const TopicsList: React.FC<TopicsListProps> = ({ items, onItemRemoved }) => {
  return (
    <List data-testid="topics-list">
      {items
        .filter(item => item.id)
        .map((item: Topic) => (
          <ListItem
            button
            key={item.id}
            data-testid="topicsListItem"
            onClick={() => navigate(`/${item.id}`)}
          >
            <ListItemText primary={item.name} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => onItemRemoved(item.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
};

export default TopicsList;
