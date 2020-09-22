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
  front: string;
  children: React.ReactNode;
  onRemove?: () => Promise<void>;
  containerClassName?: string;
};

const FlashCard: React.FC<Props> = ({ front, children, onRemove, containerClassName }) => {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = React.useState(false);
  const hasRemoveHandler = typeof onRemove === 'function';

  React.useEffect(() => {
    setIsFlipped(false);
  }, [front, children]);

  return (
    <Card className={cn(classes.flipperContainer, containerClassName, { flipped: isFlipped })}>
      <CardActionArea
        className={classes.actionArea}
        onClick={() => setIsFlipped((state) => !state)}
      >
        <CardContent className={classes.flipper}>
          <Typography color="primary" variant="h3" component="h3" className={classes.front}>
            {front}
          </Typography>
        </CardContent>
        <CardContent className={classes.flipper}>
          <Typography color="secondary" variant="h4" component="h4" className={classes.back}>
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
      {hasRemoveHandler && (
        <Fab className={classes.fab} size="medium" title="remove" onClick={onRemove}>
          <DeleteIcon />
        </Fab>
      )}
    </Card>
  );
};

export { FlashCard };
