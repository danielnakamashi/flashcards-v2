import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './FlashCard.style';

type Props = {
  title: string;
  children: React.ReactNode;
};

const FlashCard: React.FC<Props> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.flipperContainer}>
      <CardActionArea>
        <CardContent className={classes.flipper}>
          <Typography
            color="primary"
            variant="h3"
            component="h3"
            className={`${classes.bothSides} ${classes.front}`}
          >
            {title}
          </Typography>
          <div className={`${classes.bothSides} ${classes.back}`}>{children}</div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { FlashCard };
