import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flipperContainer: {
      perspective: '1000px',
      '&.flipped $flipper': {
        transform: 'rotateY(180deg)',
      },
    },
    actionArea: {
      height: '100%',
      position: 'relative',
    },
    flipper: {
      position: 'absolute',
      transformStyle: 'preserve-3d',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    front: {
      transform: 'rotateY(0deg)',
      backfaceVisibility: 'hidden',
      zIndex: 2,
    },
    back: {
      transform: 'rotateY(180deg)',
      backfaceVisibility: 'hidden',
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(1),
      right: theme.spacing(1),
    },
  }),
);

export { useStyles };
