import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      height: theme.spacing(25),
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardActions: {
      justifyContent: 'flex-end',
    },
  }),
);

export { useStyles };
