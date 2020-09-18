import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import cn from 'classnames';
import { useStyles } from './FlashCard.style';

type Props = {
  title: string;
  children: React.ReactNode;
  onRemove: () => Promise<void>;
};

const FlashCard: React.FC<Props> = ({ title, children, onRemove }) => {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <Card className={cn(classes.flipperContainer, { flipped: isFlipped })}>
      <CardActionArea
        className={classes.actionArea}
        onClick={() => setIsFlipped((state) => !state)}
      >
        <CardContent className={classes.flipper}>
          <Typography color="primary" variant="h3" component="h3" className={classes.front}>
            {title}
          </Typography>
        </CardContent>
        <CardContent className={classes.flipper}>
          <Typography color="secondary" variant="h4" component="h4" className={classes.back}>
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Fab className={classes.fab} size="medium" title="remove" onClick={onRemove}>
        <DeleteIcon />
      </Fab>
    </Card>
  );
};

export { FlashCard };
