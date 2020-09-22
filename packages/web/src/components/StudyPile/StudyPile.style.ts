import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      marginTop: '60px',
      height: '380px',
    },
    paper: {
      width: '100%',
      height: '357px',
      position: 'absolute',
      top: '1px',

      '&:first-child': {
        transform: 'rotate(5deg)',
      },
      '&:nth-child(2)': {
        transform: 'rotate(-5deg)',
      },
    },
    flashCard: {
      width: '100%',
      height: '357px',
      position: 'absolute',
      top: '1px',
    },
  }),
);

export { useStyles };
