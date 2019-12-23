import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flipperContainer: {
      perspective: '1000px',
      height: theme.spacing(25),
      '&:hover $flipper': {
        transform: 'rotateY(180deg)',
      },
    },
    flipper: {
      transition: '0.6s',
      transformStyle: 'preserve-3d',
      position: 'relative',
    },
    bothSides: {
      height: theme.spacing(25),
      backfaceVisibility: 'hidden',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    front: {
      zIndex: 2,
      transform: 'rotateY(0deg)',
      margin: '0',
      fontSize: '2.5rem',
    },
    back: {
      transform: 'rotateY(180deg)',
    },
  }),
);

export { useStyles };
