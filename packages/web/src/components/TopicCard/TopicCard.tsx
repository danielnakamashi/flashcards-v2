import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './TopicCard.style';

type Props = {
  name: string;
  children: React.ReactNode;
};

const TopicCard: React.FC<Props> = ({ name, children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.flipperContainer}>
      <CardContent className={classes.flipper}>
        <Typography
          color="primary"
          variant="h3"
          component="h3"
          className={`${classes.bothSides} ${classes.front}`}
        >
          {name}
        </Typography>
        <div className={`${classes.bothSides} ${classes.back}`}>{children}</div>
      </CardContent>
    </Card>
  );
};

export { TopicCard };
