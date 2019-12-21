import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

type Props = {
  name: string;
  children: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flipperContainer: {
      perspective: '1000px',
      '&:hover $flipper': {
        transform: 'rotateY(180deg)',
      },
      height: theme.spacing(25),
    },
    flipper: {
      transition: '0.6s',
      transformStyle: 'preserve-3d',
      position: 'relative',
    },
    both: {
      height: theme.spacing(25),
      backfaceVisibility: 'hidden',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
    },
    front: {
      zIndex: 2,
      transform: 'rotateY(0deg)',
      margin: '0',
    },
    back: {
      transform: 'rotateY(180deg)',
    },
  }),
);

const TopicCard: React.FC<Props> = ({ name, children }) => {
  const classes = useStyles();
  return (
    <Card className={classes.flipperContainer}>
      <div className={classes.flipper}>
        <CardContent component="h3" className={`${classes.both} ${classes.front}`}>
          {name}
        </CardContent>
        <CardContent className={`${classes.both} ${classes.back}`}>{children}</CardContent>
      </div>
    </Card>
  );
};

export { TopicCard };
