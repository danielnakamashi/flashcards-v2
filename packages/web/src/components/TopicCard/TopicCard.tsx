import React from 'react';
import { navigate } from '@reach/router';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './TopicCard.style';

type Props = {
  topicId: string;
  children: React.ReactNode;
  onRemove: (topicId: string) => void;
};

const TopicCard: React.FC<Props> = ({ topicId, children, onRemove }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea onClick={() => navigate(`/${topicId}`)}>
        <CardContent>
          <Typography color="primary" variant="h3" component="h3" className={classes.content}>
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button onClick={() => onRemove(topicId)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export { TopicCard };